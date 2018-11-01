// example of a function that returns a promise

function PromiseTester () {
  
  var self = this;
  
  // this function does a url fetch and returns a promise for the result
  self.fetch = function (url , options ) {
    
    return new cPromisePolyfill.Promise (function ( resolve, reject ) {
      try {
        options = options || {};
        var result = UrlFetchApp.fetch (url , options);
        resolve (result.getContentText());
      }
      
      catch (err) {
        Logger.log(err);
        reject (err);
      }
      
    });
  };  
  
};

function testGet () {
  var p = new PromiseTester();
  
  p.fetch('http://services.faa.gov/airport/status/IAD?format=json')
  .then (
    function (result) {
      Logger.log(result);
    },
    function (err) {
      throw new Error (err);
    }
  );
  
  // same thing using done
  
    p.fetch('http://services.faa.gov/airport/status/IAD?format=json')
    .done (
    function (result) {
      Logger.log(result);
    }
  );
}


