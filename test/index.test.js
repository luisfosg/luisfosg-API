/* Los test aqui Vistos son de ejemplo y prueba de aprendizaje :D */

import { palindrome } from '../examples/palindrome';

describe( 'palindrome', () => {
	test( 'Recibiendo datos', () => {
		const result = palindrome( 'data' );

		expect( result ).toBe( 'atad' );
	} );

	test( 'Indefenido', () => {
		const result = palindrome();

		expect( result ).toBeUndefined();
	} );
} );
