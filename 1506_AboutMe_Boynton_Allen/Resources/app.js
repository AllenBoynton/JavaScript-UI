// Allen Boynton
// MIU 1506
// About Me App
// June 10, 2015

// Background color
Ti.UI.setBackgroundColor("#000");

// Background
var mainWindow = Ti.UI.createWindow ({
	backgroundColor: "#fff",
	title: "ABOUT ME"
});

// Convert to navigation window
var navWindow = Ti.UI.iOS.createNavigationWindow ({
	window: mainWindow
});

// Question view 1
var questionView1 = Ti.UI.createView({
	backgroundColor: "#cccccc",
	top: 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 2
var questionView2 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView1.top + questionView1.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 3
var questionView3 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView2.top + questionView2.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 4
var questionView4 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView3.top + questionView3.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 5
var questionView5 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView4.top + questionView4.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 6
var questionView6 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView5.top + questionView5.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 7
var questionView7 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView6.top + questionView6.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 8
var questionView8 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView7.top + questionView7.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 9
var questionView9 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView8.top + questionView8.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 10
var questionView10 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView9.top + questionView9.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question view 11
var questionView11 = Ti.UI.createView ({
	backgroundColor: "#cccccc",
	top: questionView11.top + questionView11.height + 15,
	height: 30,
	width: 150,
	borderRadius: 4
});

// Question text 1
var questionText1 = Ti.UI.createLabel ({
	text: "title1",
	textAlign: "center"
});

// Question text 2
var questionText2 = Ti.UI.createLabel ({
	text: "title2",
	textAlign: "center"
});
// Question text 3
var questionText3 = Ti.UI.createLabel ({
	text: "title3",
	textAlign: "center"
});
// Question text 4
var questionText4 = Ti.UI.createLabel ({
	text: "title4",
	textAlign: "center"
});
// Question text 5
var questionText5 = Ti.UI.createLabel ({
	text: "title5",
	textAlign: "center"
});
// Question text 6
var questionText6 = Ti.UI.createLabel ({
	text: "title6",
	textAlign: "center"
});
// Question text 7
var questionText7 = Ti.UI.createLabel ({
	text: "title7",
	textAlign: "center"
});
// Question text 8
var questionText8 = Ti.UI.createLabel ({
	text: "title8",
	textAlign: "center"
});
// Question text 9
var questionText9 = Ti.UI.createLabel ({
	text: "title9",
	textAlign: "center"
});
// Question text 10
var questionText10 = Ti.UI.createLabel ({
	text: "title10",
	textAlign: "center"
});
// Question text 11
var questionText11 = Ti.UI.createLabel ({
	text: "title11",
	textAlign: "center"
});

// Loading json.js file into app.js file
var loadFile = require("json.js");

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
