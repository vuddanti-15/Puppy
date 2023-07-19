document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	
    url = "https://xamplify.io/login"
	
	showUrl(url);
}

function showUrl(url) {
	window.location = url;
	//showUrl('https://xamplify.io/login');
	return;
}	

// function showUrl(url) {
// 	cordova.InAppBrowser.open(url);
// 	return;
// }