$(document).ready(function() {
  //code here
	var quotes = [
	  	"El Guapo: Would you say I have a plethora of pinatas? -El Guapo",
	  	"Ned Nederlander: Oh, Dusty. In-famous is when you're MORE than famous. This man El Guapo, he's not just famous, he's IN-famous.",
	  	"Lucky Day: Not so fast El Guapo! Or I'll pump you so full of lead you'll be using your dick for a pencil!",
	  	"Lucky Day: Oh, great. You killed the invisible swordsman!",
	  	"Lucky Day: In a way, all of us has an El Guapo to face. For some, shyness might be their El Guapo. For others, a lack of education might be their El Guapo. For us, El Guapo is a big, dangerous man who wants to kill us. But as sure as my name is Lucky Day, the people of Santa Poco can conquer their own personal El Guapo, who also happens to be *the actual* El Guapo!",
	  	"Ned Nederlander: Didn't you notice its little balls?",
	  	"Pablo: Can I have your watch when you are dead?",
	  	"Dusty Bottoms: Well we really dont have a plan B. We didn't expect for the first plan to work. Sometimes you can overplan these things.",
	  	"Ned Nederlander: Sew, very old one! Sew like the wind!",
	  	"Mr. Flugelman: It'll be a cold day in hell when Harry Flugelman lets an actor tell *him* what to do!",
	  	"Lucky Day: Oh great! Real Bullets!",
	  	"Jefe: You wanna die with a man's gun. Not a little sissy gun like this.",
	  	"Lucky Day: Well, you slime eating dogs! You scum sucking pigs! You sons of a motherless goat!",
	  	"Lucky Day: [Sobbing] I've been shot already."
	  ];

	  var imageClasses = [
	  	".1",
	  	".2",
	  	".3",
	  	".4",
	  	".5",
	  	".6",
	  	".7",
	  	".8",
	  	".9",
	  	".10",
	  	".11",
	  	".12",
	  	".13",
	  	".14"
	  ]

	$("button").on("click", function() {
		var random = Math.floor((Math.random())*quotes.length);
		$("p").html(quotes[random]);
		var picture = imageClasses[random];
		$("#quoteContainer").attr(picture);
		console.log($("div").attr());
	});
});
