var possibilities = {
  "#cpu-rock#player-rock": "Draw",
  "#cpu-rock#player-paper": "Player Wins",
  "#cpu-rock#player-scissors": "CPU Wins",
  "#cpu-paper#player-rock": "CPU Wins",
  "#cpu-paper#player-paper": "Draw",
  "#cpu-paper#player-scissors": "Player Wins",
  "#cpu-scissors#player-rock": "Player Wins",
  "#cpu-scissors#player-paper": "CPU Wins",
  "#cpu-scissors#player-scissors": "Draw"
};
var cpuChoice = "";
var cpuScore = 0;
var playerScore = 0;
var playerName = "";

$(document).ready(function() {
  reset();
  $("body").css('visibility', 'hidden');
  $(".container0").css('visibility', 'visible');

  $("#start").click(function() {
    playerName = $("#enter-player-name").val();
    $("#player-name").text(playerName.toUpperCase());
    $("#cpu-score").text(cpuScore.toString().padStart(2,0));
    $("#player-score").text(playerScore.toString().padStart(2,0));
    $(".container0").addClass("hideDialog");
    setTimeout(function() {
      $(".container0").hide();
    }, 1000);
    $("body").css('visibility', 'visible');
    setTimeout(function() {
      $(".container1").addClass("tracking");
    }, 1000);
  });

  $("#play-rock").click(function() {
    reset();
    cpuChoice = cpuPlay();
    $(cpuChoice + ", #player-rock").show();
    $(cpuChoice + ", #player-rock").addClass("displayRPS");
    setTimeout(function() {
      $(cpuChoice + ", #player-rock").removeClass("displayRPS");
    }, 1000);
    evaluate(cpuChoice, "#player-rock");
  });

  $("#play-paper").click(function() {
    reset();
    cpuChoice = cpuPlay();
    $(cpuChoice + ", #player-paper").show();
    $(cpuChoice + ", #player-paper").addClass("displayRPS");
    setTimeout(function() {
      $(cpuChoice + ", #player-paper").removeClass("displayRPS");
    }, 1000);
    evaluate(cpuChoice, "#player-paper");
  });

  $("#play-scissors").click(function() {
    reset();
    cpuChoice = cpuPlay();
    $(cpuChoice + ", #player-scissors").show();
    $(cpuChoice + ", #player-scissors").addClass("displayRPS");
    setTimeout(function() {
      $(cpuChoice + ", #player-scissors").removeClass("displayRPS");
    }, 1000);
    evaluate(cpuChoice, "#player-scissors");
  });
});

function reset() {
  $("#cpu-rock, #cpu-paper, #cpu-scissors, #player-rock, #player-paper, #player-scissors").hide();
}

function cpuPlay() {
  var rand = Math.floor(Math.random() * 3) + 1;
  if(rand === 1) {
    return "#cpu-rock";
  }
  else if (rand === 2) {
    return "#cpu-paper";
  }
  else if (rand === 3) {
    return "#cpu-scissors";
  }
}

function evaluate(cpu, player) {
  result = possibilities[cpu+player];
  switch (result) {
    case "Player Wins":
      playerScore++;
      $("#player-score").text(playerScore.toString().padStart(2,0));
      $("#player").addClass("attention");
      setTimeout(function() {
        $("#player").removeClass("attention");
      }, 1500);
      break;
    case "CPU Wins":
      cpuScore++;
      $("#cpu-score").text(cpuScore.toString().padStart(2,0));
      $("#cpu").addClass("attention");
      setTimeout(function() {
        $("#cpu").removeClass("attention");
      }, 1500);
      break;

  }
}
