@echo off
cd /d "<your path>\whatsapp change notification sound"
powershell -WindowStyle Hidden -Command "Start-Process -FilePath 'node' -ArgumentList 'index.js' -WindowStyle Hidden"
exit
