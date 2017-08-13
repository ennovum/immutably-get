import immutably from 'immutably';

import immutablyGet from './immutably-get/immutably-get';
immutably.get = immutablyGet;

export default immutablyGet;
export {immutablyGet};

// Webpack can't export default ESM properly
try {
    module.exports = immutablyGet;
} catch (err) {
    err; // noop
}
