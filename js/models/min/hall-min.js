var app = app || {};

(function (eventSystem) {

    function Hall(name, capacity) {
        this._name = name;
        this._capacity = capacity;
        this.parties = [];
        this.lectures = [];
    }

    Hall.prototype.addEvent = function (event) {
        if (event._type == 'party') {
            this.parties.push(event);
        }
        if (event._type == 'lecture') {
            this.lectures.push(event);
        }
    };

    Hall.prototype.getName = function () {
        return this._name;
    };

    Hall.prototype.getCapacity = function () {
        return this._capacity;
    };

    Hall.prototype.setCapacity = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Capacity of hall should be positive numeric value");
        }

        if (testForValidNumericInput(value)) {
            this._capacity = value;
        }
    };

    eventSystem.hall = function (name, capacity) {
        return new Hall(name, capacity);
    }

})(app);

