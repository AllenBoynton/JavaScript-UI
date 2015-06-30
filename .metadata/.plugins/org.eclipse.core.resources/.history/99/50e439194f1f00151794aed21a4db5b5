// Allen Boynton
// Miu 1506
// json data

var top5 ={	
		'theTitle': {
				'selenaGomez': {
						'title'		: '#1 Good for You (feat. A$AP Rocky) - Single',
						'artist'	: '- Selena Gomez',
						'time'		: 'Time: 3:41',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released June 22, 2015',
						'label'		: 'Interscope Records',			
						'rating'	: 'Rating: Rated 4.5 out of 5 stars',
						'image'		: 'images/Good_for_you.jpg',
						'url'		: 'https://www.youtube.com/watch?v=DR4FJQ4dkY4'
					},
					
				'omi': {
						'title'		: '#2 Cheerleader (Felix Jaehn Remix Radio Edit) - Single',
						'artist'	: '- Omi',
						'time'		: 'Time: 3:00',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released May 20, 2014',
						'label'		: 'Ultra Records',			
						'rating'	: 'Rating: Rated 4.5 out of 5 stars',
						'image'		: 'images/cheerleader.jpg',
						'url'		: 'https://www.youtube.com/watch?v=kDX4Eezxiyk'
					},
					
				'rachelPlatten': {
						'title'		: '#3 Fight Song',
						'artist'	: '- Rachel Platten',
						'time'		: 'Time: 3:23',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released May 11, 2015',
						'label'		: 'Columbia Records',			
						'rating'	: 'Rating: Rated 4 out of 5 stars',
						'image'		: 'images/fightsong.jpg',
						'url'		: 'https://www.youtube.com/watch?v=xo1VInw-SKc'
					},
					
				'theWeeknd': {
						'title'		: '#4 Can\'t Feel My Face - Single',
						'artist'	: '- The Weeknd',
						'time'		: 'Time: 3:35',
						'genre'		: 'Genre: R&B/Soul',
						'released'	: 'Released June 8, 2015',
						'label'		: 'The Weeknd XO',			
						'rating'	: 'Rating: Rated 4.5 out of 5 stars',
						'image'		: 'images/theweeknd.jpg',
						'url'		: 'https://www.youtube.com/watch?v=dqt8Z1k0oWQ'
					},
					
				'taylorSwift': {
						'title'		: '#5 Bad Blood (feat. Kendrick Lamar) - Single',
						'artist'	: '- Taylor Swift',
						'time'		: 'Time: 3:19',
						'genre'		: 'Genre: Pop',
						'released'	: 'Released May 17, 2015',
						'label'		: 'Big Machine Records, LLC',			
						'rating'	: 'Rating: Rated 4 out of 5 stars',
						'image'		: 'images/badblood.png',
						'url'		: 'https://www.youtube.com/watch?v=QcIy9NiNbmo'
					}
		}		
};

// Function for logging in
var getRegistered = function(){	
	var registerWindow = Ti.UI.createWindow ({
		backgroundColor: 'black',
		title: 'Registration'
	});
	
	// Aesthetic header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: 'Welcome to Spiral Records',
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 17, fontFamily:'LobsterTwo-Italic'}
	});
	
	// Create field1
	var textField1 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: header.top + header.height + 40,
		height: 30,
		left: 100,
		right: 120
	});
	
	//Text for field1
	var fullName = Ti.UI.createLabel ({
		text: '*Full Name ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: header.top + header.height + 45,
		left: 10
	});
	
	// Input hint text for full name
	var inputHint1 = Ti.UI.createLabel ({
		text: 'Enter first and last name',
		color: 'white',
		font: {fontSize: 10},
		top: textField1.top + textField1.height + 2,
		left: 100
	});
	
	// Create field2
	var textField2 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: textField1.top + textField1.height + 30,
		height: 30,
		left: 100,
		right: 100
	});
	
	//Text for field2
	var userName = Ti.UI.createLabel ({
		text: '*Username ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: textField1.top + textField1.height + 35,
		left: 10
	});
	
	// Input hint text for username
	var inputHint2 = Ti.UI.createLabel ({
		text: 'Enter a username between 6 and 12 characters',
		color: 'white',
		font: {fontSize: 10},
		top: textField2.top + textField2.height + 2,
		left: 100
	});
	
	// Create field3
	var textField3 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: textField2.top + textField2.height + 30,
		height: 30,
		left: 100,
		right: 100
	});
	
	//Text for field3
	var password1 = Ti.UI.createLabel ({
		text: '*Password ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: textField2.top + textField2.height + 35,
		left: 10
	});
	
	// Input hint text for password
	var inputHint3 = Ti.UI.createLabel ({
		text: 'Enter a password between 6 and 12 characters',
		color: 'white',
		font: {fontSize: 10},
		top: textField3.top + textField3.height + 2,
		left: 100
	});
	
	// Create field4
	var textField4 = Ti.UI.createTextField ({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top: textField3.top + textField3.height + 30,
		height: 30,
		left: 100,
		right: 100
	});
	
	//Text for field4
	var password2 = Ti.UI.createLabel ({
		text: '*Password ',
		color: 'white',
		font: {fontSize: 16, fontFamily:'LobsterTwo-BoldItalic'},
		top: textField3.top + textField3.height + 35,
		left: 10
	});
	
	// Input hint text for password2
	var inputHint4 = Ti.UI.createLabel ({
		text: 'Verify password',
		color: 'white',
		font: {fontSize: 10},
		top: textField4.top + textField4.height + 2,
		left: 100
	});
	
	// Sign In button
	var enterButton = Ti.UI.createButton ({
		title: 'Enter',
		backgroundColor: '#ef662f',
		color: 'white',
		font: {fontSize: 18, fontFamily:'LobsterTwo-BoldItalic'},
		borderRadius: 4,
		top: textField4.top + textField4.height + 50,
		left: 100,
		right: 160
	});
	
	// Input hint text for required info
	var required = Ti.UI.createLabel ({
		text: '* Required Information',
		color: '#dfdfdf',
		font: {fontSize: 11, fontWeight: 'bold'},
		top: textField4.top + textField4.height + 92,
		left: 100
	});
	
	// Add image to page
	var image = Ti.UI.createImageView ({
		image: 'images/microphone.jpg',
		height: 240,
		bottom: 50,
		width: '100%'
	});
	
	// Escape button
	var exit2 = Ti.UI.createButton({
		backgroundColor: '#dfdfdf',
    	title: 'Exit',
    	color: '#007aff',
    	font: {fontSize: 20, fontWeight: 'bold'},
    	width: '100%',
    	height: 50,
    	bottom:0,
    	borderTop:true,
    	borderBottom:false
	});
	
	// Remove window
	var removeWindow = function(){
		registerWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
			
	registerWindow.add(header, textField1, fullName, inputHint1, textField2, userName, inputHint2, textField3, password1, inputHint3, textField4, password2, inputHint4, image, enterButton, required, exit2);
	navWindow.openWindow(registerWindow);
	exit2.addEventListener('click', function(){ alert('Are you sure you want to log off?'); });
	exit2.addEventListener('click', removeWindow);
	enterButton.addEventListener('click', getSongs);
};
	
// Function for music list tableview
var getSongs = function(){	
	var songWindow = Ti.UI.createWindow ({
		backgroundColor: 'black',
		title: 'Top 5'
	});
	
	// Aesthetic header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: 'Based on your listening',
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 17, fontFamily:'LobsterTwo-Italic'}
	});
	
	// Song 1
	var song1 = Ti.UI.createButton ({
		backgroundColor: 'white',
		top: header.top + header.height + 33,
		height: 75,
		width: '100%'				
	});

	var song1Text = Ti.UI.createLabel ({
		text: top5.theTitle.selenaGomez.title + '\n' + top5.theTitle.selenaGomez.artist,
		font: {fontSize: 15, fontWeight: 'bold', fontFamily:'LobsterTwo-BoldItalic'},
		color: '007aff',
		left: 100,
		right: 2
	});
  
	var image1 = Ti.UI.createImageView ({
		image: top5.theTitle.selenaGomez.image,
		height: 65,
		left: 20
	});
	
	// Song 2
	var song2 = Ti.UI.createButton ({
		backgroundColor: 'white',
		top: song1.top + song1.height + 33,
		height: 75,
		width: '100%'				
	});

	var song2Text = Ti.UI.createLabel ({
		text: top5.theTitle.omi.title + '\n' + top5.theTitle.omi.artist,
		font: {fontSize: 15, fontWeight: 'bold', fontFamily:'LobsterTwo-BoldItalic'},
		color: '007aff',
		left: 100,
		right: 2
	});
  
	var image2 = Ti.UI.createImageView ({
		image: top5.theTitle.omi.image,
		height: 65,
		left: 20
	});
	
	// Song 3
	var song3 = Ti.UI.createButton ({
		backgroundColor: 'white',
		top: song2.top + song2.height + 33,
		height: 75,
		width: '100%'				
	});

	var song3Text = Ti.UI.createLabel ({
		text: top5.theTitle.rachelPlatten.title + '\n' + top5.theTitle.rachelPlatten.artist,
		font: {fontSize: 15, fontWeight: 'bold', fontFamily:'LobsterTwo-BoldItalic'},
		color: '007aff',
		left: 100,
		right: 2
	});
  
	var image3 = Ti.UI.createImageView ({
		image: top5.theTitle.rachelPlatten.image,
		height: 75,
		left: 15
	});
	
	// Song 4
	var song4 = Ti.UI.createButton ({
		backgroundColor: 'white',
		top: song3.top + song3.height + 33,
		height: 75,
		width: '100%'				
	});

	var song4Text = Ti.UI.createLabel ({
		text: top5.theTitle.theWeeknd.title + '\n' + top5.theTitle.theWeeknd.artist,
		font: {fontSize: 15, fontWeight: 'bold', fontFamily:'LobsterTwo-BoldItalic'},
		color: '007aff',
		left: 100,
		right: 2
	});
  
	var image4 = Ti.UI.createImageView ({
		image: top5.theTitle.theWeeknd.image,
		height: 65,
		left: 20
	});
	
	// Song 5
	var song5 = Ti.UI.createButton ({
		backgroundColor: 'white',
		top: song4.top + song4.height + 33,
		height: 75,
		width: '100%'				
	});

	var song5Text = Ti.UI.createLabel ({
		text: top5.theTitle.taylorSwift.title + '\n' + top5.theTitle.taylorSwift.artist,
		font: {fontSize: 15, fontWeight: 'bold', fontFamily:'LobsterTwo-BoldItalic'},
		color: '007aff',
		left: 100,
		right: 2
	});
  
	var image5 = Ti.UI.createImageView ({
		image: top5.theTitle.taylorSwift.image,
		height: 65,
		left: 20
	});
	
	// Code for top 5 window
	song1.add(song1Text, image1);
	song2.add(song2Text, image2);
	song3.add(song3Text, image3);
	song4.add(song4Text, image4);
	song5.add(song5Text, image5);
	songWindow.add(header, song1, song2, song3, song4, song5);
	navWindow.openWindow(songWindow);
	song1.addEventListener('click', getDetail1);
	song2.addEventListener('click', getDetail2);
	song3.addEventListener('click', getDetail3);
	song4.addEventListener('click', getDetail4);
	song5.addEventListener('click', getDetail5);
	
	};	
		
// Song 1 details
var getDetail1 = function(){
	var detailWindow = Ti.UI.createWindow ({
		title: 'Now Playing',
		backgroundColor: 'black' 
	});
	
	// Create top page header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: top5.theTitle.selenaGomez.artist,
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 18, fontFamily:'LobsterTwo-Italic'}
	});

	var titleSong = Ti.UI.createLabel ({
		text: top5.theTitle.selenaGomez.title,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		textAlign: 'center',
		top: header.top + header.height + 20		
	});
	
	var image = Ti.UI.createImageView ({
		image: top5.theTitle.selenaGomez.image,
		top: titleSong.top + titleSong.height + 2,
		bottom: 175,
		left: 20,
		right: 20
	});
	
	// Album details
	var songDetail = Ti.UI.createLabel ({
		text: top5.theTitle.selenaGomez.rating + '\n' + 
		top5.theTitle.selenaGomez.genre + ',   ' + top5.theTitle.selenaGomez.time + 
		'\n' + top5.theTitle.selenaGomez.released + '\n' + top5.theTitle.selenaGomez.label,
		bottom: 75,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		left: 20,
		right: 20		
	});
	
	// Variables to create toolbar
	var playlist = Titanium.UI.createButton({
	    title: 'Playlist',
	    style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
	});
	
	var albumInfo = Titanium.UI.createButton({
		title: 'Album Info',
	    style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
	});
	
	var video = Titanium.UI.createButton({
	    title: 'Video',
	    style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
	});
	
	var exit4 = Titanium.UI.createButton({
	    title: 'Exit',
	    style: Titanium.UI.iPhone.SystemButtonStyle.DONE,
	});

	flexSpace = Titanium.UI.createButton({
	    systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	// Toolbar with 3 tabs
	var toolbar = Titanium.UI.iOS.createToolbar({
	    items:[playlist, flexSpace, albumInfo, flexSpace, video, flexSpace, exit4],
	    bottom:0,
	    borderTop:true,
	    borderBottom:false
	});
	
	// Create web video page
	var getVideo = function(){
		var videoWindow = Ti.UI.createWindow ({
			backgroundColor: 'black',
			title: 'Music Video'
		});
				
	    var media = require('media');
 
		var videoPlayer = media.createYouTubePlayer({
		      src: top5.theTitle.selenaGomez.url,
		      fullscreen:true,
		      backButtonTitle:'Back'
		});
		 
		videoWindow.add(videoPlayer);
		navWindow.openWindow(videoWindow);
	};
	
	// Remove window
	var removeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		songWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		
	};
		
	detailWindow.add(header, titleSong, image, songDetail, toolbar);
	navWindow.openWindow(detailWindow);
	playlist.addEventListener('click', getSongs);
	albumInfo.addEventListener('click', getDetail1);
	video.addEventListener('click', getVideo);
	exit4.addEventListener('click', function(){ alert('Are you sure you want to log off?'); });
	exit4.addEventListener('click', removeWindow);
	
};

// Song 2 details
var getDetail2 = function(){
	var detailWindow = Ti.UI.createWindow ({
		title: 'Now Playing',
		backgroundColor: 'black' 
	});
	
	// Create top page header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: top5.theTitle.omi.artist,
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 18, fontFamily:'LobsterTwo-Italic'}
	});

	var titleSong = Ti.UI.createLabel ({
		text: top5.theTitle.omi.title,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		textAlign: 'center',
		top: header.top + header.height + 20		
	});
	
	var image = Ti.UI.createImageView ({
		image: top5.theTitle.omi.image,
		top: titleSong.top + titleSong.height + 2,
		bottom: 175,
		left: 20,
		right: 20
	});
	
	// Album details
	var songDetail = Ti.UI.createLabel ({
		text: top5.theTitle.omi.rating + '\n' + 
		top5.theTitle.omi.genre + ',   ' + top5.theTitle.omi.time + 
		'\n' + top5.theTitle.omi.released + '\n' + top5.theTitle.omi.label,
		bottom: 75,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		left: 20,
		right: 20		
	});
	
	// Toolbar with 3 tabs
	var tabBar = Titanium.UI.iOS.createTabbedBar({
	    labels:['Album Info', 'Video', 'Exit'],
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	    height: 30,
	    width: '100%',
	    bottom:0
	});
			
	detailWindow.add(header, titleSong, image, songDetail, tabBar);
	navWindow.openWindow(detailWindow);
	
};

// Song 3 details
var getDetail3 = function(){
	var detailWindow = Ti.UI.createWindow ({
		title: 'Now Playing',
		backgroundColor: 'black' 
	});
	
	// Create top page header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: top5.theTitle.rachelPlatten.artist,
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 18, fontFamily:'LobsterTwo-Italic'}
	});

	var titleSong = Ti.UI.createLabel ({
		text: top5.theTitle.rachelPlatten.title,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		textAlign: 'center',
		top: header.top + header.height + 20		
	});
	
	var image = Ti.UI.createImageView ({
		image: top5.theTitle.rachelPlatten.image,
		top: titleSong.top + titleSong.height + 2,
		bottom: 175,
		left: 20,
		right: 20
	});
	
	// Album details
	var songDetail = Ti.UI.createLabel ({
		text: top5.theTitle.rachelPlatten.rating + '\n' + 
		top5.theTitle.rachelPlatten.genre + ',   ' + top5.theTitle.rachelPlatten.time + 
		'\n' + top5.theTitle.rachelPlatten.released + '\n' + top5.theTitle.rachelPlatten.label,
		bottom: 75,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		left: 20,
		right: 20		
	});
	
	// Toolbar with 3 tabs
	var tabBar = Titanium.UI.iOS.createTabbedBar({
	    labels:['Album Info', 'Video', 'Exit'],
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	    height: 30,
	    width: '100%',
	    bottom:0
	});
			
	detailWindow.add(header, titleSong, image, songDetail, tabBar);
	navWindow.openWindow(detailWindow);
	
};

// Song 4 details
var getDetail4 = function(){
	var detailWindow = Ti.UI.createWindow ({
		title: 'Now Playing',
		backgroundColor: 'black' 
	});
	
	// Create top page header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: top5.theTitle.theWeeknd.artist,
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 18, fontFamily:'LobsterTwo-Italic'}
	});

	var titleSong = Ti.UI.createLabel ({
		text: top5.theTitle.theWeeknd.title,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		textAlign: 'center',
		top: header.top + header.height + 20		
	});
	
	var image = Ti.UI.createImageView ({
		image: top5.theTitle.theWeeknd.image,
		top: titleSong.top + titleSong.height + 2,
		bottom: 175,
		left: 20,
		right: 20
	});
	
	// Album details
	var songDetail = Ti.UI.createLabel ({
		text: top5.theTitle.theWeeknd.rating + '\n' + 
		top5.theTitle.theWeeknd.genre + ',   ' + top5.theTitle.theWeeknd.time + 
		'\n' + top5.theTitle.theWeeknd.released + '\n' + top5.theTitle.theWeeknd.label,
		bottom: 75,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		left: 20,
		right: 20		
	});
	
	// Toolbar with 3 tabs
	var tabBar = Titanium.UI.iOS.createTabbedBar({
	    labels:['Album Info', 'Video', 'Exit'],
	    style:Titanium.UI.iPhone.SystemButtonStyle.BAR,
	    height: 30,
	    width: '100%',
	    bottom:0
	});
			
	detailWindow.add(header, titleSong, image, songDetail, tabBar);
	navWindow.openWindow(detailWindow);
	
};

// Song 5 details
var getDetail5 = function(){
	var detailWindow = Ti.UI.createWindow ({
		title: 'Now Playing',
		backgroundColor: 'black' 
	});
	
	// Create top page header
	var header = Ti.UI.createLabel ({
		backgroundColor: 'white',
		text: top5.theTitle.taylorSwift.artist,
		top: 0,
		height: 30,
		width: '100%',
		color: '#007aff',
		textAlign: 'center',
		font: {fontSize: 18, fontFamily:'LobsterTwo-Italic'}
	});

	var titleSong = Ti.UI.createLabel ({
		text: top5.theTitle.taylorSwift.title,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		textAlign: 'center',
		top: header.top + header.height + 20		
	});
	
	var image = Ti.UI.createImageView ({
		image: top5.theTitle.taylorSwift.image,
		top: titleSong.top + titleSong.height + 2,
		bottom: 175,
		left: 20,
		right: 20
	});
	
	// Album details
	var songDetail = Ti.UI.createLabel ({
		text: top5.theTitle.taylorSwift.rating + '\n' + 
		top5.theTitle.taylorSwift.genre + ',   ' + top5.theTitle.taylorSwift.time + 
		'\n' + top5.theTitle.taylorSwift.released + '\n' + top5.theTitle.taylorSwift.label,
		bottom: 75,
		font: {fontSize: 17, fontWeight: 'bold'},
		color: 'white',
		left: 20,
		right: 20		
	});
	
	// Toolbar with 3 tabs
	var tabBar = Ti.UI.iOS.createTabbedBar({
	    labels:['Album Info', 'Video', 'Exit'],
	    style:Ti.UI.iPhone.SystemButtonStyle.BAR,
	    height: 30,
	    width: '100%',
	    bottom:0
	});
			
	detailWindow.add(header, titleSong, image, songDetail, tabBar);
	navWindow.openWindow(detailWindow);
	
};

// Main event listeners
register.addEventListener('click', getRegistered);
loginButton.addEventListener('click', getSongs);
