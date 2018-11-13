module.exports = function (source) {
    console.log('111')
    // if (this.cacheable) this.cacheable();

    // console.log(typeof source === "string", '222')

    var value = typeof source === "string" ? JSON.parse(source) : source;
    console.log(value, '----')
    value = JSON.stringify(value)
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029');

    return value;
}