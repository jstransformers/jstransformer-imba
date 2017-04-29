# jstransformer-imba

[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-imba.svg)](https://greenkeeper.io/)

[Imba](https://github.com/somebee/imba) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-imba/master.svg)](https://travis-ci.org/jstransformers/jstransformer-imba)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-imba/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-imba)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-imba/master.svg)](http://david-dm.org/jstransformers/jstransformer-imba)
[![NPM version](https://img.shields.io/npm/v/jstransformer-imba.svg)](https://www.npmjs.org/package/jstransformer-imba)

## Installation

    npm install jstransformer-imba

## API

```js
var imba = require('jstransformer')(require('jstransformer-imba'));

imba.render('var message = "Hello, {name}!"').body
//=> 'var message = ("Hello, " + name + "!");
```

## License

MIT
