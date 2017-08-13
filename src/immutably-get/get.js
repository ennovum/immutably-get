import pathseq from 'pathseq';

function get(input, path, alt) {
    if (path === null || path === undefined) {
        return valueGet(input, alt);
    }
    if (Array.isArray(path)) {
        return sequenceGet(input, path, alt);
    }
    return pathGet(input, path, alt);
}

function pathGet(input, path, alt) {
    const sequence = pathseq(path);
    const value = sequenceGet(input, sequence, alt);
    return value;
}

function sequenceGet(input, sequence, alt) {
    const [key, ...subSequence] = sequence;

    if (subSequence.length > 0) {
        const subInput = input ? input[key] : undefined;
        const value = sequenceGet(subInput, subSequence, alt);
        return value;
    }
    else {
        const value = keyValueGet(input, key, alt);
        return value;
    }
}

function keyValueGet(input, key, alt) {
    return valueGet(input ? input[key] : undefined, alt);
}

function valueGet(value, alt) {
    return value === undefined ? alt : value;
}

export {get};
