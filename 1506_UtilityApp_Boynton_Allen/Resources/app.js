// Allen Boynton
// MIU 1506
// Utility Application
// June 25, 2015

// Create main window
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "black",
	title: 'Spiral Music Library'
});

navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

var header = Ti.UI.createLabel ({
	backgroundColor: 'white',
	text: 'Access Your Library',
	top: 0,
	height: 30,
	width: '100%',
	color: '#007aff',
	textAlign: 'center',
	font: {fontSize: 17, fontFamily:'LobsterTwo-Italic'}
});

var register = Titanium.UI.createButton({
    title: 'Register',
    style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
});

var top5 = Titanium.UI.createButton({
	title: 'TOP 5',
    style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
});

var exit = Titanium.UI.createButton({
    title: '       Exit ',
    style: Titanium.UI.iPhone.SystemButtonStyle.BORDERED,
});

flexSpace = Titanium.UI.createButton({
    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
});

var toolbar = Titanium.UI.iOS.createToolbar({
    items:[register, flexSpace, top5, flexSpace, exit],
    bottom:0,
    borderTop:true,
    borderBottom:false
});

// Username text field
var textField1 = Ti.UI.createTextField ({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: 'Username',
	color: 'black',
	top: header.top + header.height + 60,
	height: 35,
	left: 70,
	right: 70
});

// Sign In button
var loginButton = Ti.UI.createButton ({
	title: 'Login',
	backgroundColor: '#ef662f',
	color: 'white',
	font: {fontSize: 18, fontFamily:'LobsterTwo-BoldItalic'},
	borderRadius: 4,
	top: textField1.top + textField1.height + 140,
	left: 120,
	right: 120
});

// Password text field
var textField2 = Ti.UI.createTextField ({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	hintText: 'Password',
	color: 'black',
	top: textField1.top + textField1.height + 15,
	height: 35,
	left: 70,
	right: 70,
	passwordMask: true
});

// Forgot password
var forgot = Ti.UI.createButton ({
	title: 'Forget your password?',
	color: 'white',
	textAlign: 'center',
	top: textField2.top + textField2.height + 10,
	font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'}
});

//Image view
var image = Ti.UI.createImageView ({
	image: 'images/mixer.jpg',
	height: 250,
	top: 310,
	width: '100%' 
});

var loadFile = require('json');

mainWindow.add(header, textField1, textField2, loginButton, forgot, toolbar, image);
navWindow.open();
