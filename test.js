import process from 'node:process';
import test from 'ava';
import osFilterObj from './index.js';

test('works', t => {
	const fixtures = [{
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

	t.is(osFilterObj(fixtures).length, 2);
	t.is(osFilterObj(fixtures)[0].os, undefined);
	t.is(osFilterObj(fixtures)[1].os, process.platform);
});
