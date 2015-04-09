window.addEventListener('load', eventWindowLoaded, false);	
function eventWindowLoaded() {
	window.scrollTo(500, 0);
	document.body.style.overflow = 'hidden';
	setTimeout(function() {
		document.body.style.overflow = 'auto';
	}, 1200);
}
function loadContent(callerID){
	window.scrollTo(500, 0);
	var theContent = document.getElementById('theContent');
	var theCaller = document.getElementById(callerID);
	var callerClass = theCaller.className;
	var contentID = callerID+'Content';
	var activeTabs = document.getElementsByClassName('active');
	var popUpDivs = document.getElementsByClassName('popUp');
	var contentDiv = document.getElementById(callerID+'Content');
	var tabClass = contentDiv.className;
	/*doing stuff*/
	document.body.style.overflow = 'hidden';
	setTimeout(function() {
		document.body.style.overflow = 'auto';
	}, 1200);
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
	if (callerClass !='active'){
		theCaller.className = 'active';
	}
	else {
		theCaller.className = 'inactive';
	} 
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
