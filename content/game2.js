/*functions*/

function who_goes_first()
{
		var a=Math.round(Math.random());
		if (a===0)
		{
			$('h2').eq(0).text(playerOne+" won the toss!");
			return 1;
		}
		else if (a===1)
		{
			$('h2').eq(0).text(playerTwo+" won the toss!");
			return 2;
		}
}


function p1()
{
	$('button').on("click", function ()
							{
								$(this).css("background","#4CAF50");
								var x = check_winner();
								if (x === 1)
								{
									console.log("P1 won");
									return;
								}
								else
								{
									p2();
								}
							}
							);
	return ;
}




function p2()
{
	$('button').on("click", function ()
							{
								$(this).css("background","#ff0055");
								var y = check_winner();
								if (y === 2)
								{
									console.log("P2 won");
									return ;
								}
								else
								{
									p1();
								}
							}
							);
	return;
}




var winning_combinations = [ [0,1,2], [0,4,8], [0,3,6], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8] ];
function check_winner()
{
	for (var i of winning_combinations)
		{
			if ( $('button').eq(i[0]).css("background-color") === "rgb(76, 175, 80)"  &&
					( $('button').eq(i[1]).css("background-color") === "rgb(76, 175, 80)"  &&
					  $('button').eq(i[2]).css("background-color") === "rgb(76, 175, 80)" )
				)

				{
					$('h2').eq(0).text(playerOne+" won the game!");
					$('body').fadeOut(1000);
					return 1;
				}

			else if ( $('button').eq(i[0]).css("background-color") === "rgb(255, 0, 85)" &&
								$('button').eq(i[1]).css("background-color") === "rgb(255, 0, 85)" &&
								$('button').eq(i[2]).css("background-color") === "rgb(255, 0, 85)" )
				{
					$('h2').eq(0).text(playerTwo+" won the game!");
					$('body').fadeOut(1000);
					return 2;
				}
			return 0;
		}
}




/*main*/

console.log("Local js is linked")

var playerOne = prompt("Player1 is green, Enter your name:");
var playerTwo = prompt("Player2 is pink, Enter your name:");
$('.user1').text(playerOne);
$('.user2').text(playerTwo);

var toss = who_goes_first();

if (toss===1)
{
	p1();
	console.log("Back to main 1");
}
else if (toss===2)
{
	p2();
	console.log("Back to main 2");
}
















/*functions*/

function who_goes_first() {
		var a = Math.round(Math.random());

		if (a == 0) { 
			$('h2').eq(0).text(playerOne+" won the toss!");
			return 0;
		}

		else if (a == 1) {
			$('h2').eq(0).text(playerTwo+" won the toss!");
			return 1;
		}
}


function player_one() {
	$('button').click( function () {
						$(this).css("background","#4CAF50");
						$(this).removeClass("two");
						$(this).addClass("one");

						if (check_winner() == 1) {
							$("table").fadeOut ("slow", function() {
											$("h2").text (playerOne+" won!");
										});
						}

						player_two();

				});
}


function player_two() {
	$('button').click( function () {
						$(this).css("background","#ff0055");
						$(this).removeClass("one");
						$(this).addClass("two");

						if (check_winner() == 2) {
							$("table").fadeOut ("slow", function() {
											$("h2").text (playerTwo+" won!");
										});
						}

						player_one();
				});
}


var winning_combinations = [ [0,1,2], [0,4,8], [0,3,6],
							 [1,4,7], [2,4,6], [2,5,8],
							 [3,4,5], [6,7,8] ];

/*var winning_combinations = [ [0,1,2], [0,2,1], [1,0,2], [1,2,0], [2,0,1], [2,1,0],
 							 [0,4,8], [0,8,4], [4,0,8], [4,8,0], [8,0,4], [8,4,0], 
 							 [0,3,6], [0,6,3], [3,0,6], [3,6,0], [6,0,3], [6,3,0], 
 							 [1,4,7], [1,7,4], [4,1,7], [4,7,1], [7,1,4], [7,4,1], 
 							 [2,4,6], [2,6,4], [4,2,6], [4,6,2], [6,2,4], [6,4,2], 
 							 [2,5,8], [2,8,5], [5,2,8], [5,8,2], [8,2,5], [8,5,2], 
 							 [3,4,5], [3,5,4], [4,3,5], [4,5,3], [5,3,4], [5,4,3], 
 							 [6,7,8], [6,8,7], [7,6,8], [7,8,6], [8,6,7], [8,7,6] ]*/

function check_winner() {
	for ( i of winning_combinations ) {

		// if ( $("button").eq(i[0]).css("background-color") == "rgb(76, 175, 80)" &&
		// 	($("button").eq(i[1]).css("background-color") == "rgb(76, 175, 80)" &&
		// 	 $("button").eq(i[2]).css("background-color") == "rgb(76, 175, 80)") ) {
		// 	return (1);
		// }

		// else if ( $("button").eq(i[0]).css("background-color") == "rgb(255, 0, 85)" &&
		// 	($("button").eq(i[1]).css("background-color") == "rgb(255, 0, 85)" &&
		// 	 $("button").eq(i[2]).css("background-color") == "rgb(255, 0, 85)") ) {
		// 	return (2);

		if ( $("button").eq(i[0]).hasClass("one") &&
			($("button").eq(i[1]).hasClass("one") &&
			 $("button").eq(i[2]).hasClass("one")) ) {
			console.log($("button").eq(i[0]).attr("class"));
			console.log($("button").eq(i[1]).attr("class"));
			console.log($("button").eq(i[2]).attr("class"));
			return (1);
		}

		else if ( $("button").eq(i[0]).hasClass("two") &&
			($("button").eq(i[1]).hasClass("two") &&
			 $("button").eq(i[2]).hasClass("two")) ) {
			console.log($("button").eq(i[0]).attr("class"));
			console.log($("button").eq(i[1]).attr("class"));
			console.log($("button").eq(i[2]).attr("class"));
			return (2);
		};
	};
}



/*main*/

console.log("Local js is linked")

var playerOne = prompt("Player one:");
var playerTwo = prompt("Player two:");
$('.user1').text(playerOne);
$('.user2').text(playerTwo);

var toss = who_goes_first();

if (toss == 0) {
	player_one();
}

else if (toss == 1){
	player_two();
}
