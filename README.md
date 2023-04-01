<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Same Kind Casts

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a list of ndarray [data types][@stdlib/ndarray/dtypes] to which a provided ndarray [data type][@stdlib/ndarray/dtypes] can be safely cast or cast within the same "kind".

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/ndarray-same-kind-casts
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var sameKindCasts = require( '@stdlib/ndarray-same-kind-casts' );
```

#### sameKindCasts( \[dtype] )

If provided a `dtype` argument, returns a list of ndarray [data types][@stdlib/ndarray/dtypes] to which a provided ndarray [data type][@stdlib/ndarray/dtypes] can be safely cast or cast within the same "kind" (e.g., between signed integers or between floating-point numbers).

```javascript
var out = sameKindCasts( 'float64' );
// e.g., returns [ 'float64', 'float32', ... ]
```

If not provided a `dtype` argument, the function returns a casting table.

```javascript
var out = sameKindCasts();
// returns {...}

var f64 = out[ 'float64' ];
// returns {...}

var v = f64[ 'float32' ];
// returns 1
```

If provided an unrecognized or unsupported `dtype`, the function returns `null`.

```javascript
var out = sameKindCasts( 'foo' );
// returns null
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/ndarray-dtypes' );
var sameKindCasts = require( '@stdlib/ndarray-same-kind-casts' );

var DTYPES;
var list;
var i;

// Get the list of supported ndarray data types:
DTYPES = dtypes();

// Print the list of ndarray data types to which a data type can be cast...
for ( i = 0; i < DTYPES.length; i++ ) {
    list = sameKindCasts( DTYPES[ i ] );
    console.log( '%s: %s', DTYPES[ i ], list.join( ', ' ) );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-casting-modes`][@stdlib/ndarray/casting-modes]</span><span class="delimiter">: </span><span class="description">list of ndarray casting modes.</span>
-   <span class="package-name">[`@stdlib/ndarray-dtypes`][@stdlib/ndarray/dtypes]</span><span class="delimiter">: </span><span class="description">list of ndarray data types.</span>
-   <span class="package-name">[`@stdlib/ndarray-safe-casts`][@stdlib/ndarray/safe-casts]</span><span class="delimiter">: </span><span class="description">return a list of ndarray data types to which a provided ndarray data type can be safely cast.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-same-kind-casts.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-same-kind-casts

[test-image]: https://github.com/stdlib-js/ndarray-same-kind-casts/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-same-kind-casts/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-same-kind-casts/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-same-kind-casts?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-same-kind-casts.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-same-kind-casts/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-same-kind-casts/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-same-kind-casts/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-same-kind-casts/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-same-kind-casts/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-same-kind-casts/main/LICENSE

<!-- <related-links> -->

[@stdlib/ndarray/casting-modes]: https://github.com/stdlib-js/ndarray-casting-modes

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes

[@stdlib/ndarray/safe-casts]: https://github.com/stdlib-js/ndarray-safe-casts

<!-- </related-links> -->

</section>

<!-- /.links -->
