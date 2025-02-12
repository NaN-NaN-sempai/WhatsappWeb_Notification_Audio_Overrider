# Explanation
### Be aware that this method disable some security features of the browser!
**WhatsappWeb_Notification_Audio_Overrider** is a service that changes the notification sound of the Whatsapp Web by using `Resource Override` to change the original sound requisition URL to a local Express Server URL.

### Follow the steps to run it:


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

Changed version at `../extension/disable CSP changed`

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

# Editing values
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


