import process from 'node:process';
import test from 'ava';
import m from './index.js';

test('works', t => {
	const array = [{
		foo: 'all',
	}, {
		foo: 'linux',
		os: 'linux',
	}, {
		foo: 'darwin',
		os: 'darwin',
	}, {
		foo: 'win32',
		os: 'win32',
	}, {
		foo: 'arm',
		os: 'arm',
	}];

	t.is(m(array).length, 2);
	t.is(m(array)[0].os, undefined);
	t.is(m(array)[1].os, process.platform);
});
