'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {
  var $rightDude;
  var $leftDude;

  var guy1;
  var guy2;

  var goodHtmlFactory;
  var badHtmlFactory;

  var intervalId;

  var $startButton;

  var $battleStatus;


  function generateFighters() {

    $rightDude = $('.right-dude .info');
    guy1 = context.generateGoodGuy();


    $leftDude = $('.left-dude .info');
    guy2 = context.generateBadGuy();

    updateFighterDisplay();

  }

  function updateFighterDisplay() {
    var $goodTemplateHtml = $('#fighter-template-one').html();
    goodHtmlFactory = _.template($goodTemplateHtml);
    var htmlOne = goodHtmlFactory(guy1);
    $rightDude.html(htmlOne);

    var $badTemplateHtml = $('#fighter-template-two').html();
    badHtmlFactory = _.template($badTemplateHtml);
    var htmlTwo = badHtmlFactory(guy2);
    $leftDude.html(htmlTwo);


  }

  function fightRounds() {
    var $rightSprite = $('.right-dude .sprite');
    var $leftSprite = $('.left-dude .sprite');

    var damage = Math.floor(Math.random() * 3);
    guy1.hp -= damage;
    if(guy1.hp < 6) {
      $rightSprite.addClass('sprite hurt');
    }
    if(guy1.hp < 1) {
      $rightSprite.addClass('sprite dead');
    }


    damage = Math.floor(Math.random() * 3);
    guy2.hp -= damage;
    if(guy2.hp < 6) {
      $leftSprite.addClass('sprite hurt');
    }
    if(guy2.hp < 1) {
      $leftSprite.addClass('sprite dead');
    }


    updateFighterDisplay();


    if(guy1.hp < 1 || guy2.hp < 1) {
      endOfBattle();
    }


  }

  function endOfBattle() {
    clearInterval(intervalId); //no more fighting
    if(guy1.hp < 1) {
      $battleStatus.html('Evil prevails! Mwahaha!');
    }
    if(guy2.hp < 1) {
      $battleStatus.html('Feel the power of justice!');
    }
    if(guy1.hp < 1 && guy2.hp < 1) {
      $battleStatus.html('Double K.O!');
    }

    var promise = $.ajax({
      url: '/api/leaderboard',
      method: 'POST',
      data: {
        guy1Name: guy1.goodName,
        guy1HP: guy1.hp,
        guy2Name: guy2.badName,
        guy2HP: guy2.hp
      }
    })
    promise.done(function(result){
      console.log('POST done', result);
    });


    //send data to server
  }


  function startGame() {

    $startButton.toggle();

    intervalId = setInterval(fightRounds, 1000);

    $battleStatus = $('.battle-status');
    $battleStatus.html('Fight!');

  }


  function start() {

    generateFighters();

    $startButton = $('.start-button');
    $startButton.on('click', startGame);

  }

  context.start = start;

})(window.Fantasy);
