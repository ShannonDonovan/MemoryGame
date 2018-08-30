// $('.yellow').css('background-color', 'green');
var colourList = [];
var colourLookUp = {
	yellow: 1,
	blue: 2,
	green: 3,
	red: 4
};
var level = 1;

function getRando(){
	var num = Math.floor(Math.random()*4)+1;
	return num; 
}

function startOnClick(){
	level = 1;
	$("#statusBar").text("Watch the sequence...");
	colourList = [];
	setTimeout(getDemLights, 2000, level);
}

function userInput(event){
	var id = event.target.id;
	var num = colourLookUp[id];
	console.log(colourList, num);
	if(colourList[0] === num){
		colourList.shift();
		if(colourList.length === 0){
			level++;
			colourList = [];
			setTimeout(getDemLights, 2000, level);
		} 
	}
	else{
		$("#statusBar").text("Incorrect. Press start to begin a new game");
		level = 1;
		colourList = [];
	}
}

function getDemLights(i){
	$("#statusBar").text("Watch the sequence...");
	if(i === 0){
		$("#statusBar").text("Your turn!");
		return;
	}

	var num = getRando();
	colourList.push(num);
	if (num === 1){
		$(".yellow").fadeOut(700, "linear", function(){
			$(".yellow").fadeIn();
			getDemLights(i-1);
		});

	} else if (num === 2){
		$(".blue").fadeOut(700, "linear", function(){
			$(".blue").fadeIn();
			getDemLights(i-1);
		});

	} else if (num === 3){
		$(".green").fadeOut(700, "linear", function(){
			$(this).fadeIn();
			getDemLights(i-1);
		});

	} else {
		$(".red").fadeOut(700, "linear", function(){
			$(this).fadeIn();
			getDemLights(i-1);
		});
	}
}

$(document).ready(function(){
	$(".startGame").on("click", startOnClick);
	$(".yellow").on("click", userInput);
	$(".green").on("click", userInput);
	$(".blue").on("click", userInput);
	$(".red").on("click", userInput);
});