'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {

  function generateGoodNames() {

    var $templateHtml = $('#fighter-template-one').html();
    var htmlFactory = _.template($templateHtml);
    var $rightDude = $('.right-dude');

    var html = htmlFactory(
      {
        goodName: context.generateGoodGuy()
      }
    );
    $rightDude.append(html);

  }

  function generateBadNames() {

    var $templateHtml = $('#fighter-template-two').html();
    var htmlFactory = _.template($templateHtml);
    var $leftDude = $('.left-dude');

    var html = htmlFactory(
      {
        badName: context.generateBadGuy()
      }
    );
    $leftDude.append(html);

  }



  function generateGoodHP() {
    var $templateHtml = $('#fighter-template-one').html();
    var htmlFactory = _.template($templateHtml);
    var $rightDude = $('.right-dude');

    var html = htmlFactory(
      {
        goodHP: context.generateGoodHP()
      }
    );
    $rightDude.append(html);


  }

  function generateBadHP() {
    var $templateHtml = $('#fighter-template-two').html();
    var htmlFactory = _.template($templateHtml);
    var $leftDude = $('.left-dude');

    var html = htmlFactory(
      {
        badHP: context.generateBadHP()
      }
    );
    $leftDude.append(html);


  }

  function start() {

    generateGoodNames();
    generateBadNames();
    generateGoodHP();
    generateBadHP();

  }

  context.start = start;

})(window.Fantasy);
