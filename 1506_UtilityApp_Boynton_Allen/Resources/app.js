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

// Create top page header
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

// Variables to create toolbar
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

// Toolbar with 3 tabs
var toolbar = Titanium.UI.iOS.createToolbar({
    items:[register, flexSpace, top5, flexSpace, exit],
    bottom:0,
    borderTop:true,
    borderBottom:false
});
		
// Username text field
var username = Ti.UI.createTextField ({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	keyboardType: Ti.UI.KEYBOARD_DEFAULF,
	hintText: 'Username',
	color: 'black',
	top: header.top + header.height + 60,
	height: 35,
	left: 70,
	right: 70
});

// Password text field
var password = Ti.UI.createTextField ({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	hintText: 'Password',
	color: 'black',
	top: username.top + username.height + 15,
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
	top: header.top + header.height + 150,
	font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'}
});

// Forgot page
var getPassword = function(){
	var forgotWindow = Ti.UI.createWindow ({
		backgroundColor: 'black',
		title: 'Password Recovery'
	});
	
	var emailField1 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		backgroundColor: 'white',
		borderRadius: 4,
		top: 60,
		height: 30,
		left: 110,
		right: 90
	});
	
	//Enter email
	var email = Ti.UI.createLabel ({
		text: 'Enter email',
		color: 'white',
		font: {fontSize: 18, fontFamily:'LobsterTwo-BoldItalic'},
		top: 62,
		left: 10
	});
	
	// Input hint text for email entry
	var inputHint1 = Ti.UI.createLabel ({
		text: 'Enter email to retrieve your password',
		color: 'white',
		font: {fontSize: 10},
		top: emailField1.top + emailField1.height + 4,
		left: 110
	});
	
	// Verify email
	var emailField2 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		returnKeyType: Ti.UI.RETURNKEY_DEFAULT,
		keyboardType: Ti.UI.KEYBOARD_DEFAULT,
		backgroundColor: 'white',
		borderRadius: 4,
		top: emailField1.top + emailField1.height + 40,
		height: 30,
		left: 110,
		right: 90
	});
	
	//Text for emailField2
	var username2 = Ti.UI.createLabel ({
		text: 'Verify email',
		color: 'white',
		font: {fontSize: 18, fontFamily:'LobsterTwo-BoldItalic'},
		top: emailField1.top + emailField1.height + 40,
		left: 10
	});
	
	// Recover button
	var recoverButton = Ti.UI.createButton ({
		title: 'Recover Password',
		backgroundColor: '#ef662f',
		color: 'white',
		font: {fontSize: 18, fontFamily:'LobsterTwo-BoldItalic'},
		textAlign: 'center',
		borderRadius: 4,
		top: emailField2.top + emailField2.height + 60,
		height: 30,
		left: 110,
		right: 110
	});
	
	// Add image to page
	var image = Ti.UI.createImageView ({
		image: 'images/questionmark.jpg',
		height: 240,
		bottom: 50,
		width: '100%'
	});
	
	// Escape button
	var exit3 = Ti.UI.createButton({
		backgroundColor: '#dfdfdf',
    	title: 'Exit',
    	color: '#007aff',
    	font: {fontSize: 18},
    	// style: Ti.UI.iPhone.SystemButtonStyle.DONE,
    	width: '100%',
    	height: 50,
    	bottom:0,
    	borderTop:true,
    	borderBottom:false
	});			
	forgotWindow.add(emailField1, email, inputHint1, emailField2, username2, image, recoverButton, exit3);
	navWindow.openWindow(forgotWindow);
	recoverButton.addEventListener('click', function(){ alert('Your password has been sent to your email \n Click "OK" to return to Login'); });	
	
};	
	
// Sign In button
var loginButton = Ti.UI.createButton ({
	title: 'Login',
	backgroundColor: '#ef662f',
	color: 'white',
	font: {fontSize: 18, fontFamily:'LobsterTwo-BoldItalic'},
	borderRadius: 4,
	top: username.top + username.height + 140,
	left: 120,
	right: 120
});
	
//Image view
var image = Ti.UI.createImageView ({
	image: 'images/mixer.jpg',
	height: 250,
	top: 310,
	width: '100%' 
});

// Load json data to bootstrap file
var loadFile = require('json');

// Main code for view function
mainWindow.add(header, toolbar, username, password, forgot, loginButton, image);
top5.addEventListener('click', function(){ alert('Please login to view your library.'); });
exit.addEventListener('click', function(){ alert('Are you sure you want to log off?'); });
forgot.addEventListener('click', getPassword);
navWindow.open();