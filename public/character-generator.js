'use strict'
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {

  function generateGoodGuy() {
    var goodNames = ['Goody Gumdrops', 'Hero Number 1', 'Blue Fist of Justice', 'Blue Angel Man'];
    var goodNamesSelector = Math.floor(Math.random() * goodNames.length);

    var blueDudeName = goodNames[goodNamesSelector];

    return blueDudeName;


  }

  function generateBadGuy() {
    var badNames = ['Timmay Gingerman', 'Villian Number 1', 'Red Destruction', 'Red Devil Man'];

    var badNamesSelector = Math.floor(Math.random() * badNames.length);

    var redDudeName = badNames[badNamesSelector];

    return redDudeName;
  }

  function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateGoodHP() {
    var blueRandomHP = getRandom(5, 10);

    return blueRandomHP;

  }

  function generateBadHP() {
    var redRandomHP = getRandom(5, 10);

    return redRandomHP;

}


  context.generateGoodGuy = generateGoodGuy;
  context.generateBadGuy = generateBadGuy;
  context.generateGoodHP = generateGoodHP;
  context.generateBadHP = generateBadHP;


})(window.Fantasy);
