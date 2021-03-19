/* Los test aqui Vistos son de ejemplo y prueba de aprendizaje :D */

import { palindrome } from '../examples/palindrome';

describe( 'palindrome', () => {
	test( 'get data', () => {
		const result = palindrome( 'data' );

		expect( result ).toBe( 'atad' );
	} );

	test( 'Undefined', () => {
		const result = palindrome();

		expect( result ).toBeUndefined();
	} );
} );
