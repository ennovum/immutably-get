import test from 'tape';

import {get} from './get';

test('immutably / get / get a value with no path', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = true;
        const resultValue = get(input, null);
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, input);
    });

    testCase.doesNotThrow(() => {
        const input = undefined;
        const alt = true;
        const resultValue = get(input, null, alt);
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = 'foo';
        const alt = 'bar';
        const resultValue = get(input, null, alt);
        const expectedValue = 'foo';

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, input);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const alt = [];
        const resultValue = get(input, null, alt);
        const expectedValue = ['foo', 'bar', 'baz'];

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, input);
    });

    testCase.end();
});

test('immutably / get / get a value with a path', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = {foo: true};
        const resultValue = get(input, 'foo');
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, input.foo);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: undefined};
        const alt = true;
        const resultValue = get(input, 'foo', alt);
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: undefined};
        const alt = {bar: true};
        const resultValue = get(input, 'foo', alt);
        const expectedValue = {bar: true};

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const alt = false;
        const resultValue = get(input, '[0]', alt);
        const expectedValue = 'foo';

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, input[0]);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: true}}};
        const alt = false;
        const resultValue = get(input, 'foo.bar.baz', alt);
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, input.foo.bar.baz);
    });

    testCase.end();
});

test('immutably / get / get a value with an invalid path', (testCase) => {
    testCase.doesNotThrow(() => {
        const input = {foo: true};
        const resultValue = get(input, 'bar');
        const expectedValue = undefined;

        testCase.deepEqual(resultValue, expectedValue);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: undefined};
        const alt = true;
        const resultValue = get(input, 'bar', alt);
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: undefined};
        const alt = {bar: true};
        const resultValue = get(input, 'bar', alt);
        const expectedValue = {bar: true};

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const alt = true;
        const resultValue = get(input, '[10]', alt);
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = ['foo', 'bar', 'baz'];
        const alt = {bar: true};
        const resultValue = get(input, '[10]', alt);
        const expectedValue = {bar: true};

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: true}}};
        const alt = true;
        const resultValue = get(input, 'xxx.yyy', alt);
        const expectedValue = true;

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.doesNotThrow(() => {
        const input = {foo: {bar: {baz: true}}};
        const alt = {bar: true};
        const resultValue = get(input, 'xxx.yyy', alt);
        const expectedValue = {bar: true};

        testCase.deepEqual(resultValue, expectedValue);
        testCase.equal(resultValue, alt);
    });

    testCase.end();
});
