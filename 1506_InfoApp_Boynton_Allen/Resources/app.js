// Allen Boynton
// MIU 1506
// Informational App
// June 18, 2015

// Set background and home tab
var mainWindow = Ti.UI.createWindow ({
	backgroundImage: 'images/grass.jpg',
	title: 'Top 20 Strongest Dog Breeds',
	font: {fontWeight: 'bold'}
});

var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

// Create tabs 
var homeTab = Ti.UI.createTab ({
	icon: 'images/home.jpg',
	title: 'Home',
	window: mainWindow
});

// Create a Button 1.
var window1 = Ti.UI.createButton({
	title: 'The Mastiff',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: 10,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 2.
var window2 = Ti.UI.createButton({
	title: 'The Great Dane',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window1.top + window1.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 3.
var window3 = Ti.UI.createButton({
	title: 'The Saint Bernard',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window2.top + window2.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 4.
var window4 = Ti.UI.createButton({
	title: 'The Rottweiller',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window3.top + window3.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 5.
var window5 = Ti.UI.createButton({
	title: 'The Irish Wolfhound',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window4.top + window4.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 6.
var window6 = Ti.UI.createButton({
	title: 'The Boerboel',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window5.top + window5.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 7.
var window7 = Ti.UI.createButton({
	title: 'The Great Pyrenees',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window6.top + window6.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 8.
var window8 = Ti.UI.createButton({
	title: 'The American Pit Bull Terrier',
	color: 'D2FF4F',
	font: {fontSize: 17, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window7.top + window7.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 9.
var window9 = Ti.UI.createButton({
	title: 'The Greater Swiss Mountain Dog',
	color: 'D2FF4F',
	font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window8.top + window8.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

// Create a Button 10.
var window10 = Ti.UI.createButton({
	title: 'The Newfoundland',
	color: 'D2FF4F',
	font: {fontSize: 18, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
	textAlign: 'center',
	backgroundColor: 'gray',
	height: 50,
	width: 250,
	top: window9.top + window9.height + 9,
	borderRadius: 4,
	borderColor: 'black',
	borderWidth: 2
});

var loadFile = require("json");

// Open tab group
// tabGroup.addTab(homeTab);
// tabGroup.addTab(searchTab);
// tabGroup.open();

// Main code
mainWindow.add(window1, window2, window3, window4, window5, window6, window7, window8, window9, window10);
navWindow.open();
