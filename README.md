# immutably-get

Getter for non-mutating operations on data structures ([immutably](https://www.npmjs.com/package/immutably) extension).

## Install

`immutably-get` is an extension of [immutably](https://www.npmjs.com/package/immutably) (peer dependency).
`immutably-get` is available to download through [NPM](https://www.npmjs.com/package/immutably-get).
```
$ npm install immutably immutably-get
```

## Import

When being imported `immutably-get` embeds itself inside `immutably`.
```
import immutably from 'immutably';
import 'immutably-get';
immutably; // embedded immutably-get
```

## Use

### `get`

Returns a value from the data structure given path or if it's empty (`undefined`), the alternative value.

```
value = immutably.get(input, path, altValue);
```

**Arguments**

* `input` *(any)* input data structure.
* `path` *(string)* input data structure nested value path.
* `altValue` *(any)* input data structure alternative value.

**Returns**

* `value` *(any)* value from the data structure given path or alternative value.

**Examples**

Basic use:
```
const input = {foo: {bar: {baz: true}}};
const value = immutably.get(input, 'foo.bar.baz', false);
value; // true
```

You can find more examples in the test files.

## Changelog

**1.1.0**

* build JS compression switched off
* `package.json` module configured
* `.npmignore` update
* peer dependencies version bump

**1.0.0**

* `immutably.get` implemented & unit tested

## Roadmap

Empty.

## Develop

If you want to fork and develop `immutably-get`, these commands are for you:
```
$ npm run dev
$ npm run test-dev
```

## Test

`immutably-get` is equipped with a test suite. You can run it with:
```
$ npm run test
```

## Licence

MIT
