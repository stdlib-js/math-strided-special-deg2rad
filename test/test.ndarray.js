/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var uniform = require( '@stdlib/random-base-uniform' ).factory;
var deg2rad = require( '@stdlib/math-base-special-deg2rad' );
var filledarray = require( '@stdlib/array-filled' );
var Float64Array = require( '@stdlib/array-float64' );
var Uint8Array = require( '@stdlib/array-uint8' );
var resolveEnum = require( '@stdlib/strided-base-dtype-resolve-enum' );
var enum2str = require( '@stdlib/strided-base-dtype-enum2str' );
var types = require( './../lib/types.json' );
var data = require( './../lib/data.js' );
var strided = require( './../lib/ndarray.js' );


// VARIABLES //

var rand = uniform( -180.0, 180.0 );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof strided, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 9', function test( t ) {
	t.strictEqual( strided.length, 9, 'arity of 9' );
	t.end();
});

tape( 'the function throws an error if provided a first argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( value, 'float64', x, 1, 0, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a second argument which is not a supported dtype', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, value, x, 1, 0, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a third argument which is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', value, 1, 0, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a fourth argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', x, value, 0, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a fifth argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, value, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a sixth argument which is not a supported dtype', function test( t ) {
	var values;
	var i;

	values = [
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, value, y, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a seventh argument which is not an array-like object', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 0, 'float64', value, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided an eighth argument which is not an integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, value, 0 );
		};
	}
});

tape( 'the function throws an error if provided a ninth argument which is not a nonnegative integer', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-1,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), TypeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, value );
		};
	}
});

tape( 'the function throws an error if provided a third argument which has insufficient elements', function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var y = new Float64Array( 10 );
			strided( y.length, 'float64', value, 1, 0, 'float64', y, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided a seventh argument which has insufficient elements', function test( t ) {
	var values;
	var i;

	values = [
		new Float64Array( [] ),
		new Float64Array( [ rand() ] ),
		new Float64Array( [ rand(), rand() ] ),
		new Float64Array( [ rand(), rand(), rand() ] )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[ i ] ), RangeError, 'throws an error when provided '+values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			strided( x.length, 'float64', x, 1, 0, 'float64', value, 1, 0 );
		};
	}
});

tape( 'the function throws an error if provided insufficient arguments', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		strided();
	}
});

tape( 'the function throws an error if provided too many arguments', function test( t ) {
	t.throws( foo, Error, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float64Array( 10 );
		var y = new Float64Array( x.length );
		strided( x.length, 'float64', x, 1, 0, 1, 'float64', y, 1, 0, 1 );
	}
});

tape( 'the function throws an error if provided unsupported array data types', function test( t ) {
	t.throws( foo, TypeError, 'throws an error' );
	t.end();

	function foo() {
		var x = new Float64Array( 10 );
		var y = new Uint8Array( x.length );
		strided( x.length, 'float64', x, 1, 0, 'uint8', y, 1, 0 );
	}
});

tape( 'the function converts each element from degrees to radians', function test( t ) {
	var expected;
	var len;
	var t1;
	var t2;
	var x;
	var y;
	var i;
	var j;

	len = 10;
	for ( i = 0; i < types.length; i += 2 ) {
		t1 = enum2str( resolveEnum( types[ i ] ) );
		t2 = enum2str( resolveEnum( types[ i+1 ] ) );
		x = filledarray( 0.0, len, t1 );
		y = filledarray( 0.0, len, t2 );
		for ( j = 0; j < len; j++ ) {
			x[ j ] = rand();
		}
		strided( len, t1, x, 1, 0, t2, y, 1, 0 );
		for ( j = 0; j < len; j++ ) {
			expected = data[ i/2 ]( x[ j ] );
			t.strictEqual( y[ j ], expected, 'returns expected value. x: '+x[j]+'. expected: '+expected+'. actual: '+y[j]+'. dtypes: '+t1+','+t2+'.' );
		}
	}
	t.end();
});

tape( 'the function supports an `x` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 2, 0, 'float64', y, 1, 0 );

	expected = new Float64Array([
		deg2rad( x[ 0 ] ),
		deg2rad( x[ 2 ] ),
		deg2rad( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports an `x` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		rand(),
		rand(),
		rand(), // 0
		rand(), // 1
		rand()  // 2
	]);
	y = new Float64Array([
		0.0, // 0
		0.0, // 1
		0.0, // 2
		0.0,
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, 1, 2, 'float64', y, 1, 0 );

	expected = new Float64Array([
		deg2rad( x[ 2 ] ),
		deg2rad( x[ 3 ] ),
		deg2rad( x[ 4 ] ),
		0.0,
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` stride', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		0.0, // 0
		0.0,
		0.0, // 1
		0.0,
		0.0  // 2
	]);
	N = 3;

	strided( N, 'float64', x, 1, 0, 'float64', y, 2, 0 );

	expected = new Float64Array([
		deg2rad( x[ 0 ] ),
		0.0,
		deg2rad( x[ 1 ] ),
		0.0,
		deg2rad( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports a `y` offset', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 0
		rand(), // 1
		rand(), // 2
		rand(),
		rand()
	]);
	y = new Float64Array([
		0.0,
		0.0,
		0.0, // 0
		0.0, // 1
		0.0  // 2
	]);
	N = 3;

	strided( N, 'float64', x, 1, 0, 'float64', y, 1, 2 );

	expected = new Float64Array([
		0.0,
		0.0,
		deg2rad( x[ 0 ] ),
		deg2rad( x[ 1 ] ),
		deg2rad( x[ 2 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns a reference to the destination array', function test( t ) {
	var out;
	var x;
	var y;

	x = new Float64Array( 5 );
	y = new Float64Array( x.length );

	out = strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );

	t.strictEqual( out, y, 'same reference' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `y` unchanged', function test( t ) {
	var expected;
	var x;
	var y;

	x = new Float64Array( [ rand(), rand(), rand(), rand(), rand() ] );
	y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	expected = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

	strided( -1, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	strided( 0, 'float64', x, 1, 0, 'float64', y, 1, 0 );
	t.deepEqual( y, expected, 'returns `y` unchanged' );

	t.end();
});

tape( 'the function supports negative strides', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		rand(), // 2
		rand(),
		rand(), // 1
		rand(),
		rand()  // 0
	]);
	y = new Float64Array([
		0.0,
		0.0, // 2
		0.0, // 1
		0.0, // 0
		0.0
	]);
	N = 3;

	strided( N, 'float64', x, -2, x.length-1, 'float64', y, -1, y.length-2 );

	expected = new Float64Array([
		0.0,
		deg2rad( x[ 0 ] ),
		deg2rad( x[ 2 ] ),
		deg2rad( x[ 4 ] ),
		0.0
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports complex access patterns', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = new Float64Array([
		rand(),
		rand(), // 0
		rand(),
		rand(), // 1
		rand(),
		rand()  // 2
	]);
	y = new Float64Array([
		0.0,
		0.0,
		0.0,
		0.0, // 2
		0.0, // 1
		0.0  // 0
	]);
	N = 3;

	strided( N, 'float64', x, 2, 1, 'float64', y, -1, y.length-1 );

	expected = new Float64Array([
		0.0,
		0.0,
		0.0,
		deg2rad( x[ 5 ] ),
		deg2rad( x[ 3 ] ),
		deg2rad( x[ 1 ] )
	]);

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});

tape( 'the function supports array-like objects', function test( t ) {
	var expected;
	var x;
	var y;
	var N;

	x = {
		'length': 5,
		'0': rand(), // 0
		'1': rand(),
		'2': rand(), // 1
		'3': rand(),
		'4': rand()  // 2
	};
	y = {
		'length': 5,
		'0': 0.0, // 0
		'1': 0.0, // 1
		'2': 0.0, // 2
		'3': 0.0,
		'4': 0.0
	};
	N = 3;

	strided( N, 'generic', x, 2, 0, 'generic', y, 1, 0 );

	expected = {
		'length': 5,
		'0': deg2rad( x[ 0 ] ),
		'1': deg2rad( x[ 2 ] ),
		'2': deg2rad( x[ 4 ] ),
		'3': 0.0,
		'4': 0.0
	};

	t.deepEqual( y, expected, 'deep equal' );
	t.end();
});
