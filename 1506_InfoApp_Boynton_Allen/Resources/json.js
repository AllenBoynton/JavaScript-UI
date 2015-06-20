// json file

var dogBreeds = {
		"strongDogs": {			
				"theMastiff": {
					
					group: "Group: Working dogs",
					height: "Height: Generally 2 feet, 3 inches to 2 feet, 8 inches tall at the shoulder",
					weight: "Weight: Generally 130 to 220 pounds",
					feeding: "Feeding: 6 to 8 cups of high-quality dry food a day, divided into two meals",
					life: "Life: 6 to 10 years",
					origin: "Origin: England",
					overview: "The Mastiff is one of the most ancient types of dog breeds. The proper Mastiff should be a combination of grandeur and good nature, courage and docility. He's always dignified, never shy or vicious. Mastiffs love children. That said, they are large, active dogs and can accidentally knock a toddler down with a swipe of the tail. They're best suited to homes with older children. He makes a fine companion for anyone who can accommodate his great size and doesn't mind a little drool slung here and there.",
					personality: "Mastiffs dislike conflict between family members as well and will step between arguing spouses or a parent punishing a child. While he might look tough on the outside, the Mastiff is a sensitive dog that can become shy, fearful, or aggressive if mishandled. Never treat your Mastiff roughly or allow anyone else, including children, to do so."				
				},
				
				"theDane": {
					
					group: "Group: Working Dogs",
					height: "Height: Generally 2 feet, 4 inches to 2 feet, 10 inches tall at the shoulder",
					weight: "Weight: Generally 100 to 200 pounds",
					feeding: "Feeding: Adults: females, 6 to 8 cups; males 8 to 10 cups",
					life: "Life: 7 to 10 years",
					origin: "Origin: Have been found on Egyptian artifacts dating back to 3000 B.C. but have been known to be bred from the English Mastiff with German influence.",
					overview: "The Great Dane is one of the world’s tallest dog breeds; large and noble, commonly referred to as a gentle giant. Their large size belies their friendly nature, as Great Danes are known for seeking physical affection with their owners. Though they may look terribly imposing, in reality they’re one of the best-natured dogs around.",
					personality: "A well-bred Dane is one of the best-natured dogs around. He's a gentle, sweet, affectionate pet who loves to play and is relaxed with children. He has a great desire to please, which makes him easy to train."	
				},
				
				"theSaint": {
					
					group: "Group: Working Dogs",
					height: "Height: Generally 2 feet, 2 inches to 2 feet, 6 inches tall at the shoulder",
					weight: "Weight: Generally 120 to 180 pounds",
					feeding: "Feeding: 5 to 6 cups of high-quality dry food a day, divided into two meals",
					life: "Life: 8 to 10 years",
					origin: "Origin: Switzerland",
					overview: "Originally the Saint Bernard dog breed was used to guard the grounds of Switzerland's Hospice Saint Bernard as well as to help find and save lost and injured travelers. Today the St. Bernard enjoys the comforts of family life in many homes across the world. He is versatile and excels in the show ring and in obedience trials, drafting (pulling a cart or wagon), and weight pulling competitions.",
					personality: "True to their heritage as hospice dogs, Saints are friendly and welcoming. They have a steady, benevolent temperament and are kind and careful with children. They love attention but aren't as demanding of it as some breeds."
				},
				
				"theRott": {
					
					group: "Group: Working Dogs",
					height: "Height: Generally 1 foot, 10 inches to 2 feet, 3 inches tall at the shoulder",
					weight: "Weight: Generally 85 to 130 pounds",
					feeding: "Feeding: 4 to 10 cups of high-quality dry food a day, divided into two meals",
					life: "Life: 8 to 11 years",
					origin: "Origin: Their ancestors marched to Germany with the Romans",
					overview: "The Rottweiler has a muscular, massive, powerful body. The head is broad with a rounded forehead. The muzzle is well developed. The teeth meet in a scissors bite. The wide nose is black. The lips are black and the inside of the mouth is dark. The medium-sized eyes are dark and almond shaped.",
					personality: "The ideal Rottweiler is calm, confident, and courageous, never shy. He has a self-assured aloofness and doesn't make friends with people immediately or indiscriminately. Instead, he takes a wait-and-see attitude with new people or situations. With his family, he's affectionate, often following them around the house. This is not a highly excitable dog. He has an inherent desire to protect his family and property, but should never be aggressive toward people without cause. The Rottweiler is smart and adaptable with a strong work ethic."
				},
				
				"irishWolfhound": {
					
					group: "Group: Hounds",
					height: "Height: Generally 2 feet, 8 inches to 2 feet, 11 inches tall at the shoulder",
					weight: "Weight: Generally 115 to 180 pounds",
					feeding: "Feeding: 4 to 8 cups of high-quality dry food a day, divided into two meals.",
					life: "Life: 6 to 8 years",
					origin: "Origin: Ireland",
					overview: "The Irish Wolfhound is a giant-sized dog, one of the tallest breeds in the world, reaching the size of a small pony. The Irish Wolfhound dog breed was originally used in war to drag men off horses and chariots. He also hunted large game such as deer, boar, and wolves. Today this adaptable dog is a family companion who also competes in obedience, tracking, and lure coursing.",
					personality: "Intelligent and gentle, the Irish Wolfhound has a strong desire for human companionship. With his family, he's calm, dignified, and responsive. He's sensitive and must be trained using positive reinforcement such as praise and food rewards. Harsh words or physical punishment will cause him to shut down."
				},
				
				"theBoerboel": {
					
					group: "Group: Working Dogs",
					height: "Height: Generally 2 feet to 2 feet and 4 inches tall at the shoulder",
					weight: "Weight: Generally 110 to 220 pounds",
					feeding: "Feeding: You feed your Boerboel as much food as is need to keep them in the \“trim\” condition",
					life: "Life: 10 years",
					origin: "Origin: Africa",
					overview: "The Boerboel is a big, strong and intelligent working dog. It is well balanced with good muscle development and buoyant in movement. The dog should be impressive and imposing. Male dogs appear noticeably masculine and females feminine. The head is the most important feature of the Boerboel, as it represents its total character. It is short, broad, deep, square and muscular with well-filled cheeks.",
					personality: "The Boerboel is considered by most authorities to be a relatively reliable, obedient and highly intelligent breed. They have a unique combination of roughness and gentleness that can make them good family pets, when they are raised and treated properly. Generally, they are affectionate, playful, loyal, loving and confident with their families."
				},
				
				"theGreatP": {
					
					group: "Group: Working Dogs",
					height: "Height: Generally 2 feet, 1 inch to 2 feet, 8 inches tall at the shoulder",
					weight: "Weight: Generally 85 to 160 pounds",
					feeding: "Feeding: 4 to 6 cups of high-quality dry food a day, divided into two meals",
					life: "Life: 10 to 12 years",
					origin: "Origin: Originated in the Pyrenees Mountains, which form a natural border between France and Spain.",
					overview: "The Great Pyrenees dog breed's goal in life is to protect sheep, goats, livestock, people, children, grass, flowers, the moon, the lawn furniture, bird feeders, and any real or imaginary predators that may intrude on your personal space. Oh yeah, and to give, give, and give unconditional love.",
					personality: "A calm, gentle, docile demeanor is the norm for a Great Pyrenees’s Shyness, aggressiveness, and nervousness are not acceptable whatsoever, but do your part by providing tons of socialization when he's a puppy. With training, he's well mannered."
				},
				
				"thePitt": {
					
					group: "Group: Terriers",
					height: "Height: Generally 1 foot, 5 inches to 1 foot, 7 inches tall at the shoulder",
					weight: "Weight: Generally 30 to 85 pounds",
					feeding: "Feeding: 1.5 to 2.5 cups of high-quality dry food a day, divided into two meals",
					life: "12 to 16 years",
					origin: "Origin: England",
					overview: "The American Pit Bull Terrier is a companion and family dog breed. Originally bred to \"bait\" bulls, the breed evolved into all-around farm dogs, and latermoved into the house to become \"nanny dogs\" because they were so gentle around children. Their tenacity, gameness, and courage make them popular competitors in the sports of weight pulling, agility, and obedience competition.",
					personality: "These dogs love people and have no idea that their size is something of a deterrent to being a lap dog. Confident and keenly aware of their surroundings, they are watchdogs in that they may alert you to the presence of strangers, but that's primarily because they're eager to greet \"their\" guests."
				},
				
				"theSwissy": {
					
					group: "Group: Working Dogs",
					height: "Height: Generally 1 foot, 11 inches to 2 feet, 4 inches tall at the shoulder",
					weight: "Weight: Generally 85 to 140 pounds",
					feeding: "Feeding: 4 to 5 cups of high-quality dry food a day, divided into two meals",
					life: "Life: 7 to 9 years",
					origin: "Origin: Switzerland",
					overview: "The Greater Swiss Mountain dog breed was developed to be an all-around working dog, herding cattle, pulling carts, and standing guard. These days, the \“Swissy\” enjoys life as a family pet, but because of his working heritage, he enjoys being busy. This powerful breed excels in all sorts of dog sports, from agility to weight pulling.",
					personality: "The Swiss's personality is gentle, alert, and fun loving. These aren't easygoing, pushover dogs, however; they're confident canines with their own ideas, and they can be stubborn at times. Because of their bold personality, these dogs do best with owners who can be kind, yet confident, leaders."
				},
				
				"theNewFL": {
					
					group: "Group: Working Dogs",
					height: "Height: Generally 2 feet, 1 inch to 2 feet, 5 inches tall at the shoulder",
					weight: "Weight: Generally 100 to 150 pounds",
					feeding: "Feeding: 4 to 5 cups of high-quality dry food a day, divided into two meals",
					life: "Life: 8 to 10 years",
					origin: "Origin: Newfoundland",
					overview: "The Newfoundland is a large, strong dog breed from, yes - Newfoundland.He was originally used as a working dog to pull nets for fishermen and haul wood from the forest. He is a capable and hardworking dog, well suited to work on land or water. He is a strong swimmer and equally strong \"pack horse.\" Sweet natured and responsive, he makes a wonderful family companion as well.",
					personality: "The Newfoundland is known for his sweet disposition. He's like a big, loveable Teddy Bear. He loves children, is intelligent, and aims to please. He's happiest when he is with his family, and should not be left alone for long periods of time or be banished to the backyard or a kennel."
				}
		}
};

// Function to open Mastiff
var getDog1 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Mastiff',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/1.Mastiff.jpg',
		height: 250,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theMastiff.group + '\n' + dogBreeds.strongDogs.theMastiff.height + '\n' + dogBreeds.strongDogs.theMastiff.weight + '\n' + dogBreeds.strongDogs.theMastiff.life + '\n' + dogBreeds.strongDogs.theMastiff.feeding + '\n' + dogBreeds.strongDogs.theMastiff.origin,
		top: image.top + image.height + 20,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/1.Mastiff.jpg',
			height: 250,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theMastiff.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 14, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/1.Mastiff.jpg',
			height: 250,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theMastiff.personality,
			top: image.top + image.height + 20,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
	
	// Main code for function
	detailWindow.add(image, details, button1, button2);
	navWindow.openWindow(detailWindow);
	button1.addEventListener('click', getOverview);
	button2.addEventListener('click', getPersonality);
	
};

// Function to open Great Dane
var getDog2 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Great Dane',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/2.Great-Dane.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theDane.group + '\n' + dogBreeds.strongDogs.theDane.height + '\n' + dogBreeds.strongDogs.theDane.weight + '\n' + dogBreeds.strongDogs.theDane.life + '\n' + dogBreeds.strongDogs.theDane.feeding + '\n' + dogBreeds.strongDogs.theDane.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/2.Great-Dane.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theDane.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/2.Great-Dane.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theDane.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};

// Function to open St. Bernard
var getDog3 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Saint Bernard',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/3.St-Bernard.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theSaint.group + '\n' + dogBreeds.strongDogs.theSaint.height + '\n' + dogBreeds.strongDogs.theSaint.weight + '\n' + dogBreeds.strongDogs.theSaint.life + '\n' + dogBreeds.strongDogs.theSaint.feeding + '\n' + dogBreeds.strongDogs.theSaint.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/3.St-Bernard.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theSaint.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/3.St-Bernard.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theSaint.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
};

// Function to open Rottweiller
var getDog4 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Rottweiller',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/4.Rottweiler.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theRott.group + '\n' + dogBreeds.strongDogs.theRott.height + '\n' + dogBreeds.strongDogs.theRott.weight + '\n' + dogBreeds.strongDogs.theRott.life + '\n' + dogBreeds.strongDogs.theRott.feeding + '\n' + dogBreeds.strongDogs.theRott.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/4.Rottweiler.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theRott.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/4.Rottweiler.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theRott.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
};

// Function to open Irish Wolfhound
var getDog5 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Irish Wolfhound',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/5.Irish-Wolfhound.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.irishWolfhound.group + '\n' + dogBreeds.strongDogs.irishWolfhound.height + '\n' + dogBreeds.strongDogs.irishWolfhound.weight + '\n' + dogBreeds.strongDogs.irishWolfhound.life + '\n' + dogBreeds.strongDogs.irishWolfhound.feeding + '\n' + dogBreeds.strongDogs.irishWolfhound.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/5.Irish-Wolfhound.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.irishWolfhound.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/5.Irish-Wolfhound.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.irishWolfhound.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
};

// Function to open Boerboel
var getDog6 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Boerboel',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/6.Boerboel.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theBoerboel.group + '\n' + dogBreeds.strongDogs.theBoerboel.height + '\n' + dogBreeds.strongDogs.theBoerboel.weight + '\n' + dogBreeds.strongDogs.theBoerboel.life + '\n' + dogBreeds.strongDogs.theBoerboel.feeding + '\n' + dogBreeds.strongDogs.theBoerboel.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/6.Boerboel.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theBoerboel.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/6.Boerboel.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theBoerboel.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
};

// Function to open Great Pyrenees
var getDog7 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Great Pyrenees',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/7.Great-Pyrenees.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theGreatP.group + '\n' + dogBreeds.strongDogs.theGreatP.height + '\n' + dogBreeds.strongDogs.theGreatP.weight + '\n' + dogBreeds.strongDogs.theGreatP.life + '\n' + dogBreeds.strongDogs.theGreatP.feeding + '\n' + dogBreeds.strongDogs.theGreatP.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/7.Great-Pyrenees.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theGreatP.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/7.Great-Pyrenees.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theGreatP.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
};

// Function to open American Pit Bull Terrier
var getDog8 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The American Pit Bull Terrier',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/8.American-Pit-Bull-Terrier.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.thePitt.group + '\n' + dogBreeds.strongDogs.thePitt.height + '\n' + dogBreeds.strongDogs.thePitt.weight + '\n' + dogBreeds.strongDogs.thePitt.life + '\n' + dogBreeds.strongDogs.thePitt.feeding + '\n' + dogBreeds.strongDogs.thePitt.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/8.American-Pit-Bull-Terrier.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.thePitt.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/8.American-Pit-Bull-Terrier.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.thePitt.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
};

// Function to open Greater Swiss Mountain Dog
var getDog9 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Greater Swiss Mountain Dog',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/9.Greater-Swiss-Mountain-Dog.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theSwissy.group + '\n' + dogBreeds.strongDogs.theSwissy.height + '\n' + dogBreeds.strongDogs.theSwissy.weight + '\n' + dogBreeds.strongDogs.theSwissy.life + '\n' + dogBreeds.strongDogs.theSwissy.feeding + '\n' + dogBreeds.strongDogs.theSwissy.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/9.Greater-Swiss-Mountain-Dog.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theSwissy.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/9.Greater-Swiss-Mountain-Dog.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theSwissy.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
};

// Function to open The Newfoundland
var getDog10 = function(){
	
	//Detail window
	var detailWindow = Ti.UI.createWindow ({
		backgroundImage: 'images/grass.jpg',
		title: 'The Newfoundland',
		font: {fontSize: 20, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Image view
	var image = Ti.UI.createImageView ({
		image: 'images/10.Newfoundland.jpg',
		height: 230,
		top: 20,
		left: 62,
		right: 62,
		borderColor: 'black',
		borderWidth: 2 
	});
	
	//Details
	var details = Ti.UI.createLabel ({
		text: dogBreeds.strongDogs.theNewFL.group + '\n' + dogBreeds.strongDogs.theNewFL.height + '\n' + dogBreeds.strongDogs.theNewFL.weight + '\n' + dogBreeds.strongDogs.theNewFL.life + '\n' + dogBreeds.strongDogs.theNewFL.feeding + '\n' + dogBreeds.strongDogs.theNewFL.origin,
		top: image.top + image.height + 10,
		left: 62,
		right: 58,
		color: 'black',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
	});
	
	//Overview button
	var button1 = Ti.UI.createButton ({
		title: 'Overview',
		color: 'D2FF4F',
		font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 212,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
		
	//Function to enter overview
	var getOverview = function(){
		
		var overviewWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Overview',
			font: {fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/10.Newfoundland.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Overview 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theNewFL.overview,
			top: image.top + 260,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		overviewWindow.add(image, details);
		navWindow.openWindow(overviewWindow);
		
	};
	
	//Personality button
	var button2 = Ti.UI.createButton ({
		title: 'Personality',
		color: 'D2FF4F',
		font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto', fontWeight: 'bold'},
		textAlign: 'center',
		backgroundColor: 'gray',
		height: 40,
		width: 100,
		top: image.top + image.height + 275,
		right: 58,
		borderRadius: 4,
		borderColor: 'black',
		borderWidth: 2
	});
	
	//Function to enter overview
	var getPersonality = function(){
		
		var personalityWindow = Ti.UI.createWindow ({
			backgroundImage: 'images/grass.jpg',
			title: 'Personality',
			font: {fontSize: 16, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		//Image view
		var image = Ti.UI.createImageView ({
			image: 'images/10.Newfoundland.jpg',
			height: 230,
			top: 20,
			left: 62,
			right: 62,
			borderColor: 'black',
			borderWidth: 2
		});
		
		//Personality 
		var details = Ti.UI.createLabel ({
			text: dogBreeds.strongDogs.theNewFL.personality,
			top: image.top + image.height + 30,
			left: 62,
			right: 58,
			color: 'black',
			font: {fontSize: 15, fontWeight: 'bold', fontStyle: 'roboto'}
		});
		
		// Secondary code for function
		personalityWindow.add(image, details);
		navWindow.openWindow(personalityWindow);
	};
	
	// Main code for function
	detailWindow.add(image, details, button1, button2);
	navWindow.openWindow(detailWindow);
	button1.addEventListener('click', getOverview);
	button2.addEventListener('click', getPersonality);
	
};

// Code for event listeners
window1.addEventListener('click', getDog1);
window2.addEventListener('click', getDog2);
window3.addEventListener('click', getDog3);
window4.addEventListener('click', getDog4);
window5.addEventListener('click', getDog5);
window6.addEventListener('click', getDog6);
window7.addEventListener('click', getDog7);
window8.addEventListener('click', getDog8);
window9.addEventListener('click', getDog9);
window10.addEventListener('click', getDog10);