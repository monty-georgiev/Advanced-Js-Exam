Function.prototype.extend = function (parent) {
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;
};

function testForValidStringInput(input) {
    var strRegex = /([a-zA-Z])\w+/i;

    return strRegex.test(input);
}

function testForValidNumericInput(input) {
    var numRegeg = /\d/i;
    return numRegeg.test(input);
}

