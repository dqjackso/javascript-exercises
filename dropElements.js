function dropElements(arr, func) {
    return arr.filter(elem => func(elem));
}

dropElements([1, 2, 3], function (n) { return n < 3; });