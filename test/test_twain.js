/*
 * Copyright (c) 2015 Dickson Tam
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */


 (function(factory) {

   var createWrapper, assert;

   if (typeof module !== 'undefined' && module && module.exports) { // Node.js & CommonJS
     factory(require('assert'), function() { return require('../node/etc.js').wrap(['twain', 'equals' ]) });
   } else {
     factory(window.assert, function() { return function(arr) { return arr } });
     mocha.checkLeaks();
     mocha.run();
   }

 })(function(assert, createWrapper) {
   describe('Array.prototype.twain', function() {
     var array;
     before(function() {
       array = createWrapper();
     });

     it("[1].twain() == [[1]]", function() {
       assert.ok(array(array([1]).twain()).equals([[1]]));
     });

     it("[1,2].twain() == [[1,2]]", function() {
       assert.ok(array(array([1,2]).twain()).equals([[1,2]]));
     });

     it("[1,2,3].twain() == [[1,2],[3]]", function() {
       assert.ok(array(array([1,2,3]).twain()).equals([[1,2],[3]]));
     });

      it("[1,2,3,4].twain() == [[1,2],[3,4]]", function() {
        assert.ok(array(array([1,2,3,4]).twain()).equals([[1,2],[3,4]]));
      });

   });
});
