'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {

  function generateNames() {
    var goodNames = ['Goody Gumdrops', 'Hero Number 1', 'Blue Justice', 'Blue Angel'];
    var badNames = ['Timmay Gingerman', 'Villian Number 1', 'Red Destruction', 'Red Devil'];

    var goodNamesSelector = Math.floor(Math.random() * badNames.length);
    var badNamesSelector = Math.floor(Math.random() * badNames.length);

    var blueDudeName = goodNames[goodNamesSelector];
    var redDudeName = badNames[badNamesSelector];
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
