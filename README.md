A collection of handy array methods that works across the various JavaScript packaging systems, including DOM/Browser, CommonJS/Node.js, and AMD/Require.js.
Methods can be included piecewise. E-mail me if you find a Array method that you think should be included because it would be useful for other people as well.


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
<script src="/bower_components/array_etc/lib/equals.js"></script>
```

### Node
In your shell, run
```shell
npm install array-etc
```

In your file, write
```javascript
var arrload = require('array-etc');
arrload(['equals']);
```

This should add the methods listed in the array to *Array.prototype*.

##Technical Support
E-mail me if you have problems.


##Library Files

###lib/equals.js
Contains definition for *Array.prototype.equals*:

```javascript
['a', 'b','c'].equals(['a', 'b'])
```
