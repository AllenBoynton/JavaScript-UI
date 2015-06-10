// Allen Boynton
// MIU 1506
// About Me App
// June 10, 2015

// Background
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "gray",
	title: "About Me"
});

// Convert to navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

// Question view 1
var questionView1 = Ti.UI.createView({
	backgroundColor: "blue",
	top: 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 2
var questionView2 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView1.top + questionView1.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 3
var questionView3 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView2.top + questionView2.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 4
var questionView4 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView3.top + questionView3.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 5
var questionView5 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView4.top + questionView4.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 6
var questionView6 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView5.top + questionView5.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 7
var questionView7 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView6.top + questionView6.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 8
var questionView8 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView7.top + questionView7.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 9
var questionView9 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView8.top + questionView8.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 10
var questionView10 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView9.top + questionView9.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question view 11
var questionView11 = Ti.UI.createView ({
	backgroundColor: "blue",
	top: questionView10.top + questionView10.height + 22,
	height: 30,
	width: 150,
	borderRadius: 4,
	borderColor: "black",
	borderHeight: 2
});

// Question text 1
var questionText1 = Ti.UI.createLabel ({
	text: "Question 1",
	textAlign: "center",
	color: "white"
});

// Question text 2
var questionText2 = Ti.UI.createLabel ({
	text: "Question 2",
	textAlign: "center",
	color: "white"
});
// Question text 3
var questionText3 = Ti.UI.createLabel ({
	text: "Question 3",
	textAlign: "center",
	color: "white"
});
// Question text 4
var questionText4 = Ti.UI.createLabel ({
	text: "Question 4",
	textAlign: "center",
	color: "white"
});
// Question text 5
var questionText5 = Ti.UI.createLabel ({
	text: "Question 5",
	textAlign: "center",
	color: "white"
});
// Question text 6
var questionText6 = Ti.UI.createLabel ({
	text: "Question 6",
	textAlign: "center",
	color: "white"
});
// Question text 7
var questionText7 = Ti.UI.createLabel ({
	text: "Question 7",
	textAlign: "center",
	color: "white"
});
// Question text 8
var questionText8 = Ti.UI.createLabel ({
	text: "Question 8",
	textAlign: "center",
	color: "white"
});
// Question text 9
var questionText9 = Ti.UI.createLabel ({
	text: "Question 9",
	textAlign: "center",
	color: "white"
});
// Question text 10
var questionText10 = Ti.UI.createLabel ({
	text: "Question 10",
	textAlign: "center",
	color: "white"
});
// Question text 11
var questionText11 = Ti.UI.createLabel ({
	text: "Question 11",
	textAlign: "center",
	color: "white"
});

// Loading json.js file into app.js file
var loadFile = require("json");

// Main code
mainWindow.add(questionView1, questionView2, questionView3, questionView4, questionView5, questionView6, questionView7, questionView8, questionView9, questionView10, questionView11);
questionView1.add(questionText1);
questionView2.add(questionText2);
questionView3.add(questionText3);
questionView4.add(questionText4);
questionView5.add(questionText5);
questionView6.add(questionText6);
questionView7.add(questionText7);
questionView8.add(questionText8);
questionView9.add(questionText9);
questionView10.add(questionText10);
questionView11.add(questionText11);
navWindow.open();
