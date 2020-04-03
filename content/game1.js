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
						$(this).addClass("one");
						$(this).removeClass("two");
						console.log("class: "+ $(this).attr("class"));

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
						$(this).addClass("two");
						$(this).removeClass("one");
						console.log("class: "+ $(this).attr("class"));

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


function check_winner() {
	for ( i of winning_combinations ) {

		if ( $("button").eq(i[0]).hasClass("one") &&
			($("button").eq(i[1]).hasClass("one") &&
			 $("button").eq(i[2]).hasClass("one")) ) {
			console.log(i);
			return (1);
		}

		else if ( $("button").eq(i[0]).hasClass("two") &&
			($("button").eq(i[1]).hasClass("two") &&
			 $("button").eq(i[2]).hasClass("two")) ) {
			console.log(i);
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
