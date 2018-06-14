//Hmm...
//Global Variables 
var wins = 0;
var losses = 0;
var targetNumber = [21, 42, 75, 56, 100];
var counter = 0;
var numberOptions = [7, 10, 5, 3, 2, 4, 1, 6, 9, 8];
//Shuffles the cards' values
var cardValues = numberOptions.sort(function(a, b){return .8 - Math.random()});
console.log(cardValues);
//Different Dealer's number
var dealersChoice = targetNumber[Math.floor(Math.random() * targetNumber.length)];
$(window).on("load", function(){
    alert("Card Counter Game!");
    alert("The dealer will shuffle the cards each round, match her number to win!");
    $("#dealer").html(dealersChoice);
    $("#shuffle").get(0).play();
    


//console.log(dealersChoice);
//---
//Create clickable images 
//---
// Game
//Starts the game on load and pick a target number
//Shuffles deck 
//Assign points to each suit

//Accrue points and compare 

$(document).on('click', '#spadebutton', function() {    
    counter+= cardValues[0]; 
    $("#counter").html("<h1>" + counter + "</h1>");


    if (counter === dealersChoice) {
        alert("You win :D");
        wins++;
        $("#wintotal").html("<h2>" + wins + "</h2>");
        location.reload();
    }
    
    else if (counter > dealersChoice){
        alert("You lose :(")
        losses++;
        $("#losstotal").html("<h3>" + losses + "</h3>");
        location.reload();
        
    }
});

//console.log(counter);

$(document).on('click', '#diamondbutton', function() { 
    counter+= cardValues[1]; 
    $("#counter").html("<h1>" + counter + "</h1>");

    if (counter === dealersChoice) {
        alert("You win :D");
        wins++;
        $("#wintotal").html("<h2>" + wins + "</h2>");
        location.reload();
    }
    
    else if (counter > dealersChoice){
        alert("You lose :("); 
        losses++;
        $("#losstotal").html("<h3>" + losses + "</h3>");
        location.reload();
    }

});

$(document).on('click', '#clubbutton', function() { 
    counter+= cardValues[2]; 
    $("#counter").html("<h1>" + counter + "</h1>");

    if (counter === dealersChoice) {
        alert("You win :D");
        wins++;
        $("#wintotal").html("<h2>" + wins + "</h2>");
        location.reload();
    }
    
    else if (counter > dealersChoice){
        alert("You lose :(");
        losses++;
        $("#losstotal").html("<h3>" + losses + "</h3>");
        location.reload();
    }

});

$(document).on('click', '#heartbutton', function() { 
    counter+= cardValues[3]; 
    $("#counter").html("<h1>" + counter + "</h1>");

    if (counter === dealersChoice) {
        alert("You win :D");
        wins++;
        $("#wintotal").html("<h2>" + wins + "</h2>");
        location.reload();
    }
    
    else if (counter > dealersChoice){
        alert("You lose :(");
        losses++;
        $("#losstotal").html("<h3>" + losses + "</h3>");
        location.reload();
    }

});
});

$(window).on("load", function(){
    setTimeout(function () {
        $("#bgaudio").get(0).play(); 
      }, 1000);
    
});

//function lose(){
//    $("#aww").get(0).play(); 
//};
