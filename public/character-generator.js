'use strict'
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {



  function generateRandomHPBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateGoodNames(){
    var goodNames = ['Goody Gumdrops', 'Hero Number 1', 'Blue Fist of Justice', 'Blue Angel Man'];
    var goodNamesSelector = Math.floor(Math.random() * goodNames.length);

    var blueDudeName = goodNames[goodNamesSelector];

    return blueDudeName;
  }

  function generateGoodGuy() {
    var goodName = generateGoodNames();
    var hp = generateRandomHPBetween(5, 10);

    return {goodName: goodName, hp: hp }
  }

  function generateBadNames() {
    var badNames = ['The Evil Gingerman', 'Villian Number 1', 'Red Destruction', 'Red Devil Man'];
    var badNamesSelector = Math.floor(Math.random() * badNames.length);

    var redDudeName = badNames[badNamesSelector];

    return redDudeName;
  }

  function generateBadGuy() {
    var badName = generateBadNames();
    var hp = generateRandomHPBetween(5, 10);

    return {badName: badName, hp: hp }
  }



  context.generateGoodGuy = generateGoodGuy;
  context.generateBadGuy = generateBadGuy;


})(window.Fantasy);
