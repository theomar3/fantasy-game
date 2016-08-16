'use strict';
if (this.Fantasy === undefined) this.Fantasy = {};

(function(context) {

  function start() {

    //Call your code here
    console.log('starting!', context);

  }

  context.start = start;

})(window.Fantasy);
