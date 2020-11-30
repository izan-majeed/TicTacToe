/*functions*/

function who_goes_first() {
	var a = Math.round(Math.random());
	if (a === 0) {
		$('h2').eq(0).text(playerOne + " won the toss!");
		currentPlayer = playerOne;
	}
	else if (a === 1) {
		$('h2').eq(0).text(playerTwo + " won the toss!");
		currentPlayer = playerTwo;
	}
}






var winning_combinations = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
function check_winner() {
	for (var i of winning_combinations) {
		console.log(i);
		if ($('button').eq(i[0]).css("background-color") === "rgb(76, 175, 80)" &&
			($('button').eq(i[1]).css("background-color") === "rgb(76, 175, 80)" &&
				$('button').eq(i[2]).css("background-color") === "rgb(76, 175, 80)")
		) {
			$("table").fadeOut("slow", function () {
				$("h2").text(playerTwo + " won!");
			});
			return 1;
		}

		else if ($('button').eq(i[0]).css("background-color") === "rgb(255, 0, 85)" &&
			$('button').eq(i[1]).css("background-color") === "rgb(255, 0, 85)" &&
			$('button').eq(i[2]).css("background-color") === "rgb(255, 0, 85)") {

			$("table").fadeOut("slow", function () {
				$("h2").text(playerTwo + " won!");
			});
			return 2;
		}

	}
}




/*main*/

console.log("Local js is linked")

var playerOne = prompt("Player1 is green, Enter your name:");
var playerTwo = prompt("Player2 is pink, Enter your name:");
var currentPlayer;
$('.user1').text(playerOne);
$('.user2').text(playerTwo);

var toss = who_goes_first();



$('button').on("click", function () {
	if (currentPlayer == playerOne) {
		$(this).css("background", "#4CAF50");
		currentPlayer = playerTwo;
	}
	else if (currentPlayer == playerTwo) {
		$(this).css("background", "#ff0055");
		currentPlayer = playerOne;
	}
	var x = check_winner();
	if (x === 1) {
		console.log("P1 won");
		return;
	}
}
);

