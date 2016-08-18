'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {


  function start() {


    var $templateHtml = $('#fighter-template-one').html();
    var htmlFactory = _.template($templateHtml);
    var $rightDude = $('.right-dude');

    var htmlOne = htmlFactory(context.generateGoodGuy());
    $rightDude.append(htmlOne);


    var $templateHtml = $('#fighter-template-two').html();
    var htmlFactory = _.template($templateHtml);
    var $leftDude = $('.left-dude');

    var htmlTwo = htmlFactory(context.generateBadGuy());
    $leftDude.append(htmlTwo);


  }

  context.start = start;

})(window.Fantasy);
