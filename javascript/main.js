window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	window.scrollTo(500, 0);
}
function loadContent(theCaller){
	window.scrollTo(500, 0);
	var callerID = theCaller.id;
	var contentID = callerID+'Content';
	var activeTabs = document.getElementsByClassName('active');
	var popUpDivs = document.getElementsByClassName('popUp');
	var contentDiv = document.getElementById(callerID+'Content');
	var tabClass = contentDiv.className;
	for (var i=0; i<popUpDivs.length; i++) {
		popDown(popUpDivs[i]);
	}
	if (tabClass !='hidden'){
		contentDiv.className = "popDown";
		setTimeout(function() {
			contentDiv.className = "hidden";
		}, 400);
	}
	else {
		contentDiv.className = "popUp";
	}
	for (var i=0; i<activeTabs.length; i++) {
		inActivate(activeTabs[i]);
	}
	theCaller.className = 'active'; 
}
function inActivate(theElement){
	theElement.className = 'inactive'; 
}
function popDown(theElement){
	theElement.className='popDown';
	setTimeout(function() {
		theElement.className = "hidden";
	}, 400);
}
function OpenInNewTab(url) {
	var win = window.open(url, '_blank');
	win.blur();
	window.focus();
}
