var app = app || {};

(function (eventSystem) {

    function Event(options) {
        if (this.constructor === Event) {
            throw new Error("Abstract class");
        }

        this._title = options.title;
        this._type = options.type;
        this._duration = options.duration;
        this._date = options.date;
    }


    Event.prototype.getTitle = function () {
        return this._title;
    };

    Event.prototype.setTitle = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Title should be non-empty string");
        }

        if (testForValidStringInput(value)) {
            this._title = value;
        }
    };

    Event.prototype.getType = function () {
        return this._type;
    };

    Event.prototype.setType = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Type should be non-empty string");
        }

        if (testForValidStringInput(value)) {
            this._type = value;
        }
    };

    Event.prototype.getDuration = function () {
        return this._duration;
    };

    Event.prototype.setDuration = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Duration should be positive numeric value");
        }

        if (testForValidNumericInput(value)) {
            this._duration = value;
        }
    };

    Event.prototype.getDate = function () {
        return this._date;
    };

    Event.prototype.setDate = function (value) {
        if (!(value instanceof Date)) {
            throw new ArgumenException("Date should be datetime object");
        }
    };

    eventSystem._Event = Event;

})(app);

