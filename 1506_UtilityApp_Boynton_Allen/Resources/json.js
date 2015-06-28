// Allen Boynton
// Miu 1506
// json data

var top5Songs ={	
	'theTitle': 'Artists',
		'songList': [
			 {
				'title'		: 'Good for You (feat. A$AP Rocky) - Single',
				'artist'	: 'Selena Gomez',
				'time'		: 'Time: 3:41',
				'genre'		: 'Genre: Pop',
				'released'	: 'Released June 22, 2015',
				'label'		: 'Interscope Records',			
				'rating'	: 'Rating: #2 Rated 4.5 out of 5 stars.',
				'album'		: 'images/Good_for_you.jpg',
				'url'		: 'https://www.youtube.com/watch?v=DR4FJQ4dkY4'
			},
			{
				'title'		: 'Cheerleader (Felix Jaehn Remix Radio Edit) - Single',
				'artist'	: 'Omi',
				'time'		: 'Time: 3:00',
				'genre'		: 'Genre: Pop',
				'released'	: 'Released May 20, 2014',
				'label'		: 'Ultra Records',			
				'rating'	: 'Rating: #2 Rated 4.5 out of 5 stars.',
				'album'		: 'images/cheerleader.jpg',
				'url'		: 'https://www.youtube.com/watch?v=kDX4Eezxiyk'
			},
			{
				'title'		: 'Fight Song',
				'artist'	: 'Rachel Platten',
				'time'		: 'Time: 3:23',
				'genre'		: 'Genre: Pop',
				'released'	: 'Released May 11, 2015',
				'label'		: 'Columbia Records',			
				'rating'	: 'Rating: #3 Rated 4 out of 5 stars.',
				'album'		: 'images/fightsong.jpg',
				'url'		: 'https://www.youtube.com/watch?v=xo1VInw-SKc'
			},
			{
				'title'		: 'Can\'t Feel My Face - Single',
				'artist'	: 'The Weeknd',
				'time'		: 'Time: 3:35',
				'genre'		: 'Genre: R&B/Soul',
				'released'	: 'Released June 8, 2015',
				'label'		: 'The Weeknd XO',			
				'rating'	: 'Rating: #4 Rated 4.5 out of 5 stars.',
				'album'		: 'images/theweeknd.jpg',
				'url'		: 'https://www.youtube.com/watch?v=dqt8Z1k0oWQ'
			},
			{
				'title'		: 'Bad Blood (feat. Kendrick Lamar) - Single',
				'artist'	: 'Taylor Swift',
				'time'		: 'Time: 3:19',
				'genre'		: 'Genre: Pop',
				'released'	: 'Released May 17, 2015',
				'label'		: 'Big Machine Records, LLC',			
				'rating'	: 'Rating: #5 Rated 4 out of 5 stars.',
				'album'		: 'images/badblood.png',
				'url'		: 'https://www.youtube.com/watch?v=QcIy9NiNbmo'
			}
		]
};

// Function for music list tableview
var getSongs = function(){
	
	//Create song list window
	var songWindow = Ti.UI.createWindow ({
		backgroundColor: 'black',
		title: 'Top 5',
		height: 65,
		top: 0
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
	
	// Create tableview
	var songs = Ti.UI.createTableView ({
		data: topSongs.singles.SelenaGomez.title,
		top: header.top + header.height,
		hasChild: true
	});
	
	//Top 5 view title
	
	if(Ti.Platform.name === 'iPhone OS'){
		songs.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	}
	
	// Code for top 5 window
	songWindow.add(header, songs);
	navWindow.openWindow(songWindow);
	
};

// Main code
exit.addEventListener('click', function(){ alert('Are you sure you want to log off?'); });
enterButton.addEventListener('click', getSongs);
loginButton.addEventListener('click', getSongs);
