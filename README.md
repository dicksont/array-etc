[![Build Status](https://travis-ci.org/dicksont/array-etc.svg?branch=master)](https://travis-ci.org/dicksont/array-etc)
[![npm version](https://badge.fury.io/js/array-etc.svg)](http://badge.fury.io/js/array-etc)
[![Bower version](https://badge.fury.io/bo/array-etc.svg)](http://badge.fury.io/bo/array-etc)

A collection of handy array methods that works across the various JavaScript packaging systems, including DOM/Browser, CommonJS/Node.js, and AMD/Require.js.
Methods can be included piecewise. E-mail me if you find a Array method that you think should be included because it would be useful for other people as well.

## Usage
Accessing these extensions will differ depending on our module system. If we are on *Browser* or *AMD*, we can access these methods directly from an *Array* object. For example, we can do:

```javascript
['a', 'b','c'].equals(['a', 'b'])
```

However, if we are on *CommonJS/Node*, we have to access these methods through a wrapper. So instead of the call above, we would have:

```javascript
array(['a', 'b','c']).equals(['a', 'b'])
```

where *array* is a constructed function that wraps around our *Array* of interest:

```javascript
var array = require('array-etc')(['equals']);
```

This extra wrapper is a special arrangement we put in on Node, in order to avoid global conflicts with the *Array.prototype* object. We may have other libraries or other versions of this library in our dependency tree that also add methods to the *Array.prototype* object that we are not aware. We must attach the methods locally to a wrapping function to avoid these potential collisions.

Since unintentional collisions are a lot harder on Browser or with AMD, where the end developer actively controls the loading of the modules, we have not seen a case for extending the wrapping function to these systems as well.


## Installation
### Web page
If you use bower, run
```
bower install array-etc
```

If you use npm, run
```
npm install array-etc
```

Add the corresponding script tag to your page. e.g.

```html
<script src="/bower_components/array-etc/lib/equals.js"></script>
```


## API

### Node
In your shell, run
```shell
npm install array-etc
```

In your file, write
```javascript
var arrload = require('array-etc');
var arrwrap = arrload(['equals']);
```

This creates a custom wrapper function, which you can use to access the individual methods.

## Library Files

### lib/equals.js
This defines a customizable array comparison method anchored at **Array.prototype.equals**. This universal implementation does not use *JSON.stringify*, which is problematic for arrays containing functions.

Comparison is as simple as:
```javascript
['a', 'b','c'].equals(['a', 'b'])
```

Because the individual comparison function uses the triple equals operator, *Array.prototype.equals* has the following special-case behaviors:
- Objects that look the same, but were created at different points will NOT be equal.
- Functions that look the same, but were created at different points will NOT be equal.

Of course, if you don't like this behavior, you can modify it. You just have to provide your own comparison function. For example, if you want to use *JSON.stringify* for the individual comparisons, you can write:

```javascript
['a', 'b','c'].equals(['a', 'b'], function(a,b) {
    return JSON.stringify(a) == JSON.stringify(b);
});
```

And if you don't want to pass in this new comparison function every time, you can replace it with:

```javascript
Array.prototype.equals.eq = function(a,b) {
    return JSON.stringify(a) == JSON.stringify(b);
}
```

On Node, this would be:

```javascript
var array = require('array-etc')(['equals']);

array.equals.eq = function(a,b) {
    return JSON.stringify(a) == JSON.stringify(b);
}
```


## Technical Support
E-mail me if you have problems or questions.
