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

(function() {

  var eq = function(a,b) {
    return a === b;
  };

  var equals = function (array, opts) {

    opts = opts || {};

    if (typeof(opts) == 'function') {
      opts = { eq: opts };
    } else {
      opts.eq = opts.eq || eq;
    }

    if (!array || !(array instanceof Array)) return false;

    if (this.length != array.length) return false;

    for (var i = 0; i < this.length; i++) {
      var acnt = 0;

      acnt = (this[i] instanceof Array)? acnt++ : acnt;
      acnt = (array[i] instanceof Array)? acnt++ : acnt;

      if (acnt == 1)
        return false;

      if (acnt == 0 && !opts.eq(this[i], array[i]))
        return false;

      if (acnt == 2 && !this[i].equals(array[i]))
        return false;
    }

    return true;
  }

  Object.defineProperty(equals, 'eq', {
    get: function() {
      return eq;
    },
    set: function(fx) {
      if (typeof(fx) != 'function') {
        throw new Error('Property eq must be a function');
      } else {
        eq = fx;
      }
    }
  });

  Array.prototype.equals = equals;
})();
