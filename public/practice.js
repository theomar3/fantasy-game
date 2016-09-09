'use strict';
if (this.AppName === undefined) this.AppName = {};

(function(context) {

  var $rightDude = $('.right-dude .info');
  var $leftDude = $('.left-dude .info');
  var guy1;
  var guy2;

  var $goodTemplateHtml;
  var goodHtmlFactory;

  var $battleStatus;
  var $startButton = $('.start-button');


  function generateFighters() {

    guy1 = context.generateGoodGuy();


    guy2 = context.generateGoodGuy();

    updateFighterDisplay();

  }

  function updateFighterDisplay() {
    goodTemplateHtml = $('#fighter-template-one').html();
    goodHtmlFactory = _.template(goodTemplateHtml);
    var htmlOne = goodHtmlFactory(guy1);
    $rightDude.append(htmlOne);


    var badTemplateHtml = $('#fighter-template-two').html();
    var badHtmlFactory = _.template(badTemplateHtml);
    var htmlTwo = goodHtmlFactory(guy2);
    $leftDude.append(htmlTwo);



  }

  function doDamage() {
    var $rightSprite = $('.right-dude sprite');
    var $leftSprite = $('.left-dude sprite');

    var randomDamage = Math.floor(Math.random() * 3);
    guy1.hp -= damage;
    if(guy1.hp < 6) {
      $rightSprite.addClass('sprite hurt');
    }
    if(guy1.hp < 1) {
      $rightSprite.addClass('sprite dead');
    }

    randomDamage = Math.floor(Math.random() * 3);
    guy2.hp -= damage;
    if(guy2.hp < 6) {
      $leftSprite.addClass('sprite hurt');
    }
    if(guy2.hp < 1) {
      $leftSprite.addClass('sprite dead');
    }

    updateFighterDisplay();

    if(guy1.hp < 1 || guy2.hp < 1) {
    }

    if(guy1.hp < 1 || guy2.hp < 1) {
    }

    endofBattle();

  }

  function endOfBattle() {
    clearInterval(intervalId);
    $battleStatus.html('Game over');

     $.ajax({
      url: '/api/leaderboard',
      method: 'POST',
      data: {
        guy1Name : guy1.goodName,
        guy1HP : guy1.hp,
        guy2Name: guy2.badName,
        guy2HP: guy2.hp
      }
    });


  }

  function startGame() {
    $startButton.toggle();

    var intervalId = setInterval(doDamage, 1000);


    $battleStatus = $('.battle-status');
    $battleStatus.html('Fighters ready!');

  }

  function start() {


    generateFighters();

    $startButton.on('click', startGame);



  }

  context.start = start;

})(window.AppName);
