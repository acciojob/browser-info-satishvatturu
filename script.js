//your JS code here. If required.
let browserInfo = document.querySelector("#browser-info");
let browserName = navigator.appName;
let browserVersion = navigator.appVersion;
browserInfo.innerText = `You are using ${browserName} version ${browserVersion}`;