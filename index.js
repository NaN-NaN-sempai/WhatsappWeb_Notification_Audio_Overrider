
/* 
If you are using the installed whatsapp web chrome app, you can open it automatically on windows startup after server is created by setting OPEN_WHATSAPP_CHROME_APP to "true"
*/
const OPEN_WHATSAPP_CHROME_APP = false;
const OPEN_WHATSAPP_CHROME_APP_BAT_FILE_PATH = './openWhatsApp.bat';



/* !!!! USING !!!!
Allow CORS: Access-Control-Allow-Origin:
https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf

Disable Content-Security-Policy:
https://chromewebstore.google.com/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden
Changed version ar "../extension/disable CSP changed"

Resource Override:
https://chromewebstore.google.com/detail/resource-override/pkoacgokdfckfpndoffpifphamojphii
*/

/* CONFIGURATIONS:
Resource Override Dashboard URL:
chrome-extension://pkoacgokdfckfpndoffpifphamojphii/src/ui/devtoolstab.html

tab url (URL -> URL):
https://web.whatsapp.com/

from:
https://static.whatsapp.net/rsrc.php/yW/r/BS_BUUXbKq5.mp3

to (same url from the express server):
http://localhost:3000/
*/


const express = require('express');
const app = express();
const port = 3000;
const { exec } = require('child_process');

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/audio.mp3');
});

app.listen(port, () => {
	console.log(`Audio Overrider in http://localhost:${port}`);

	if(OPEN_WHATSAPP_CHROME_APP) {
		const batFilePath = OPEN_WHATSAPP_CHROME_APP_BAT_FILE_PATH;

		exec(`"${batFilePath}"`, (error, stdout, stderr) => {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		if (stderr) {
			console.error(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		});
	}
});
