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

var fxmap = {
  'equals' : '../lib/equals.js',
}

module.exports = function(fxlist) {
  var methods = {};
  var Wrapper = function(arr) {

    if (!(arr instanceof Array))
      throw new Error('array-etc: First argument(' + arr + ') of initializer must be an array');

    for(fx in methods) {
      Wrapper[fx] = methods[fx].bind(arr);
    }

    Wrapper.length = arr.length;

    return Wrapper;
  }



  function importMethod(fx) {

    var path = fxmap[fx];

    if (!path) return;

    var abspath = require.resolve(path);

    delete require.cache[abspath]; // Force reload

    methods[fx] = require(path);
    Wrapper[fx] = methods[fx];
  }

  if (typeof(fxlist) == "string") {
    fxlist = [ fxlist ];
  }

  fxlist.map(function(fx) {
    importMethod(fx)
  });


  return Wrapper;
}