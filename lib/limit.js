/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var logger = require( 'debug' );
var objectKeys = require( '@stdlib/utils-keys' );


// VARIABLES //

var debug = logger( 'map-values-async:limit' );


// MAIN //

/**
* Invokes a function once for each own property in a source object, limiting the number of concurrently pending functions.
*
* ## Notes
*
* -   Iteration order is **not** guaranteed.
* -   We need to cache an object value to prevent the edge case where, during the invocation of the transform function, the value corresponding to a particular key is swapped for some other value. For some, that might be a feature; here, we take the stance that one should be less clever.
*
* @private
* @param {Object} obj - source object
* @param {Options} opts - function options
* @param {*} [opts.thisArg] - execution context
* @param {PositiveInteger} [opts.limit] - maximum number of pending function invocations
* @param {Function} fcn - function to invoke
* @param {Callback} done - function to invoke upon completion or upon encountering an error
* @returns {void}
*/
function limit( obj, opts, fcn, done ) {
	var maxIndex;
	var count;
	var keys;
	var flg;
	var lim;
	var len;
	var idx;
	var out;
	var i;

	keys = objectKeys( obj );
	len = keys.length;
	debug( 'Number of keys: %d', len );

	out = {};
	if ( len === 0 ) {
		debug( 'Finished processing an object.' );
		return done( null, out );
	}
	if ( len < opts.limit ) {
		lim = len;
	} else {
		lim = opts.limit;
	}
	debug( 'Concurrency limit: %d', lim );
	debug( 'Number of arguments: %d', fcn.length );

	maxIndex = len - 1;
	count = 0;
	idx = -1;
	for ( i = 0; i < lim; i++ ) {
		// This guard is necessary to protect against synchronous functions which exhaust all properties...
		if ( idx < maxIndex ) {
			next(); // eslint-disable-line node/callback-return
		}
	}
	/**
	* Callback to invoke a provided function for the next property.
	*
	* @private
	*/
	function next() {
		var value;
		var key;

		idx += 1;
		key = keys[ idx ];

		value = obj[ key ];
		debug( '%s: %s', key, JSON.stringify( value ) );

		if ( fcn.length === 2 ) {
			fcn.call( opts.thisArg, key, cb );
		} else if ( fcn.length === 3 ) {
			fcn.call( opts.thisArg, key, value, cb );
		} else {
			fcn.call( opts.thisArg, key, value, obj, cb );
		}
		/**
		* Callback invoked once a provided function finishes transforming a property.
		*
		* @private
		* @param {*} [error] - error
		* @param {*} [key] - transformed key
		* @returns {void}
		*/
		function cb( error, key ) {
			if ( flg ) {
				// Prevent further processing of properties:
				return;
			}
			if ( error ) {
				flg = true;
				return clbk( error );
			}
			debug( 'Transform result => %s: %s', key, JSON.stringify( value ) );
			out[ key ] = value;
			clbk();
		}
	}

	/**
	* Callback invoked once ready to process the next property.
	*
	* @private
	* @param {*} [error] - error
	* @returns {void}
	*/
	function clbk( error ) {
		if ( error ) {
			debug( 'Encountered an error: %s', error.message );
			return done( error );
		}
		count += 1;
		debug( 'Processed %d of %d properties.', count, len );
		if ( idx < maxIndex ) {
			return next();
		}
		if ( count === len ) {
			debug( 'Finished processing an object.' );
			return done( null, out );
		}
	}
}


// EXPORTS //

module.exports = limit;
