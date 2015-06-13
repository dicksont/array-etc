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

 var assert = require('assert');

describe('Array.prototype.equals', function() {
  before(function() {
    var arrload = require('../node/loader.js');
    arrload(['equals']);
  });

  describe('true', function() {
    it('[].equals([])', function() {
      assert.ok([].equals([]));
    });

    it("[ 'a' ].equals([ 'a' ])", function() {
      assert.ok(['a'].equals(['a']));
    });


    it("[ 0 ].equals([ 0 ])", function() {
      assert.ok([ 0 ].equals([ 0 ]));
    });
  });

  describe('false', function() {
    it("![ '1' ].equals([ 1 ])", function() {
      assert.ok(!['1'].equals([ 1 ]));
    });


    it("!['a', 'b', 'c'].equals([ 'a', 'b' ])", function() {
      assert.ok(!['a', 'b','c'].equals(['a', 'b']));
    });

    it("!['a', 'b', 'c'].equals('abc')", function() {
      assert.ok(!['a', 'b','c'].equals('abc'));
    });

    it("![ function() {} ].equals([function() {}])", function() {
      assert.ok(![ function() {} ].equals([ function() {} ]));
    });

    it("![ { a: 1 } ].equals({ a: 1})", function() {
      assert.ok(![{ a: 1 }].equals([{ a: 1 }]));
    });
  });



});
