'use strict';
/*global casper*/

casper.test.begin('home page', 3, function suite(test) {

  casper.start('http://localhost:9000/', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertTitle("Hailey's Blog", "title is Hailey's Blog");
  });

  casper.then(function() {
    test.assertSelectorHasText('h1',"Hailey's Blog");
  });

  casper.run(function(){
    test.done();
  });

});