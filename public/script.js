'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {

  var $blueName = $('.right-dude .name');

  function generateNames() {
    var goodNames = ['Goody Gumdrops', 'Hero Number 1', 'Blue Fist of Justice', 'Blue Angel Man'];
    var badNames = ['Timmay Gingerman', 'Villian Number 1', 'Red Destruction', 'Red Devil Man'];

    var goodNamesSelector = Math.floor(Math.random() * badNames.length);
    var badNamesSelector = Math.floor(Math.random() * badNames.length);

    var blueDudeName = goodNames[goodNamesSelector];
    var redDudeName = badNames[badNamesSelector];

    var $templateHtml = $('#fighter-template');
    var htmlFactory = _.template($templateHtml);
    // CONTINUE HERE!!

    $blueName.text(blueDudeName);
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateHP() {
    var blueRandomHP = getRandom(5, 10);
    var redRandomHP = getRandom(5, 10);

    var blueDudeHP = blueRandomHP;
    console.log('Blue Dude:', blueDudeHP);


    var redDudeHP = redRandomHP;
    console.log('Red Dude:' ,redDudeHP);

  }

  function start() {

    generateNames();
    generateHP();

  }

  context.start = start;

})(window.Fantasy);
