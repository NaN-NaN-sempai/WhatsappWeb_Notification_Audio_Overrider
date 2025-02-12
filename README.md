# Explanation
### Be aware that this method disable some security features of the browser!
**WhatsappWeb_Notification_Audio_Overrider** is a service that changes the notification sound of the Whatsapp Web by using `Resource Override` to change the original sound requisition URL to a local Express Server URL.

### Follow the steps to run it:
### 1 - [Setup on Browser](https://github.com/NaN-NaN-sempai/WhatsappWeb_Notification_Audio_Overrider/tree/main?tab=readme-ov-file#setup-on-browser)
### 2 - [Setup Resource Override](https://github.com/NaN-NaN-sempai/WhatsappWeb_Notification_Audio_Overrider/tree/main?tab=readme-ov-file#setup-resource-override)
### 3 - [Instaling WhatsappWeb_Notification_Audio_Overrider server](https://github.com/NaN-NaN-sempai/WhatsappWeb_Notification_Audio_Overrider/tree/main?tab=readme-ov-file#instaling-whatsappweb_notification_audio_overrider-server)
### 4 - [Editing Values](https://github.com/NaN-NaN-sempai/WhatsappWeb_Notification_Audio_Overrider/tree/main?tab=readme-ov-file#editing-values)


# Setup on Browser
Install these extensions
### 1 - Allow CORS: Access-Control-Allow-Origin:
[`https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf`](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf)

### 2 - Resource Override *:
[`https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii`](https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii)

### 3 - Disable Content-Security-Policy:

[`https://chromewebstore.google.com/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden`](https://chromewebstore.google.com/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden)

The original version does not save the pages that you disable CSP so i changed the code to be used in this extension, you can use the changed version by "Loading Without Packaging" on your browser extensions manager.

Chrome: [`chrome://extensions/`](chrome://extensions/)

Changed version at `../extension/disable CSP changed`.


### After installing them, remenber to activate all of them on the Whatsapp Web page.

`Allow CORS: Access-Control-Allow-Origin`: Click on the extension icon and click on the big "C" icon and it will turn colorfull when activated.

`Disable Content-Security-Policy`: Remenber to be at the Whatsapp Page, then click on the extension icon, it will turn it on, restart the page. If you are using the unchanged version, when you close the browser or restart you computer you will need to do it again, in the changed version you do it only once.






# Setup Resource Override
### Open the Resource Override Dashboard
Click on the extension icon or go to this url:

[`chrome-extension://pkoacgokdfckfpndoffpifphamojphii/src/ui/devtoolstab.html`](chrome-extension://pkoacgokdfckfpndoffpifphamojphii/src/ui/devtoolstab.html) (may change)


### Paste the Tab URL:
```
https://web.whatsapp.com/
```

### Add Rule:
Delete any existing rule by clickin in the `X` two times then add a new one with the type:

`(URL -> URL)`


### Paste the rule `From` value:
```
https://static.whatsapp.net/rsrc.php/yW/r/BS_BUUXbKq5.mp3
```

### Paste the rule `To` value:
```
http://localhost:3000/
```
The same URL of the expresse server, remenber to change it if you change the port.



# Instaling WhatsappWeb_Notification_Audio_Overrider server
### Clone the Git project
Run on Bash
```
git clone https://github.com/NaN-NaN-sempai/WhatsappWeb_Notification_Audio_Overrider.git
```
Move to the project directory
```
cd .\WhatsappWeb_Notification_Audio_Overrider\
```

### Install packages
Run on Bash
```
npm i
```

# Editing Values
### If you want to use the bat file to open the server on Windows start up:

In the `Whatsapp Audio Overrider.bat` file you will need to add you path on the line `2`:
```
cd /d "<your path>\whatsapp change notification sound"
```
Go to the Windows Startup directory by running the `open startup folder.bat` file by executing `Win + R` and pasting 
```
shell:startup
```
Then Copy and Paste the `Whatsapp Audio Overrider.bat` file in the directory that will open.

### If you have a Whatsapp Web Webapp instaled and want to open it in the Windows start up:
In the `openWhatsApp.bat` file you will need to add the Webapp path to the line `2`:
```
start "" "<path to whatsapp web installed chrome app>"
```

In the `index.js` file you will need to set the const `OPEN_WHATSAPP_CHROME_APP` to `true` on line `4`:
```
const OPEN_WHATSAPP_CHROME_APP = false;
```
To:
```
const OPEN_WHATSAPP_CHROME_APP = true;
```

### If you want to use you own file as the notification sound
In the project directory delete the `audio.mp3` file and paste your own with the same filename.
If your file is not a `.mp3` or you want to use another path you will need to change the const `AUDIO_FILEPATH` in the `index.js` line `5`:
```
const AUDIO_FILEPATH = '/audio.mp3';
```



# Testing
### Testing the Express Server
By running on VS Code console or by the BAT file the service will run a Express server at (if not changed) `http://localhost:3000/`, if you open the URL, you will be able to hear the new notification sound.

### Testing the Security Disabling Extensions
Open Whatsapp Web and open the `console` at the `Developer Tools` then make a requisition to any website not owned by Whatsapp.

Example:
```
fetch("https://github.com/NaN-NaN-sempai/WhatsappWeb_Notification_Audio_Overrider")
    .then(console.log)
    .catch(()=>console.log("ERROR"))
```
If you see "ERROR" at the console after pasting it, they are not working


