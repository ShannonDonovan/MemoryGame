// $('.yellow').css('background-color', 'green');
function getRando(){
	var num = Math.floor(Math.random()*4)+1;
	return num; 
}

function showYellow(){
	$(".yellow").fadeIn();
}

function startOnClick(){
	console.log("hi");
	var num = getRando();
	getDemLights(num);
}

function getDemLights(num){
	console.log(num);
	if (num === 1){
		$(".yellow").fadeOut(700, "linear", showYellow)

	} else if (num === 2){
		$(".blue").fadeOut(700, "linear", function(){
			$(".blue").fadeIn();
		});

	} else if (num === 3){
		$(".green").fadeOut(700, "linear", function(){
			$(this).fadeIn();
		});

	} else {
		$(".red").fadeOut(700, "linear", function(){
			$(this).fadeIn();
		});

	}
}

$(document).ready(function(){
	$(".startGame").on("click", startOnClick);
});