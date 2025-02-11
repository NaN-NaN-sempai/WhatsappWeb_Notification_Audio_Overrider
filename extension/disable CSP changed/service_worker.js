/* global chrome */

async function isCSPDisabled(url) {
  const data = await chrome.storage.local.get('disabledUrls');
  return data.disabledUrls?.includes(url) || false;
}

async function updateUI(tab) {
  if (!tab || !tab.url) return;
  const url = new URL(tab.url).origin;
  const isDisabled = await isCSPDisabled(url);
  const iconName = isDisabled ? 'on' : 'off';
  const title = isDisabled ? 'disabled' : 'enabled';

  chrome.action.setIcon({ path: `images/icon38-${iconName}.png`, tabId: tab.id });
  chrome.action.setTitle({ title: `Content-Security-Policy headers are ${title} for this site`, tabId: tab.id });
}

async function toggleDisableCSP(tab) {
  if (!tab || !tab.url) return;
  const url = new URL(tab.url).origin;
  const data = await chrome.storage.local.get('disabledUrls');
  let disabledUrls = data.disabledUrls || [];

  if (disabledUrls.includes(url)) {
    disabledUrls = disabledUrls.filter((u) => u !== url);
  } else {
    disabledUrls.push(url);
  }

  await chrome.storage.local.set({ disabledUrls });
  console.log('Active disabled URLs:', disabledUrls);

  if (disabledUrls.length === 0) {
    chrome.declarativeNetRequest.updateSessionRules({ removeRuleIds: [1] });
  } else {
    chrome.declarativeNetRequest.updateSessionRules({
      addRules: [
        {
          id: 1,
          priority: 1,
          action: {
            type: 'modifyHeaders',
            responseHeaders: [{ header: 'content-security-policy', operation: 'remove' }],
          },
          condition: {
            urlFilter: '|*',
            resourceTypes: ['main_frame', 'sub_frame'],
          },
        },
      ],
      removeRuleIds: [1],
    });
  }

  updateUI(tab);
}

function init() {
  chrome.storage.local.set({ disabledUrls: [] });

  chrome.action.onClicked.addListener((tab) => {
    toggleDisableCSP(tab);
  });

  chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    updateUI(tab);
  });

  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
      updateUI(tab);
    }
  });
}

init();
