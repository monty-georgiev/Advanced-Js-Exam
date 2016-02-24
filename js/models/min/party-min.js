var app = app || {};


(function (eventSystem) {

    function Party(options) {
        eventSystem._Event.call(this, options);
        this._isCatered = options.isBirthday;
        this._isBirthday = options.isCatered;
        this._organiser = options.organiser;
    }

    Party.extends(eventSystem._Event);


    Party.prototype.checkIsCatered = function () {
        return this._isCatered;
    };

    Party.prototype.setIsCatered = function (value) {

        value ? this._isCatered = true : this._isCatered = false;
        //if (value) {
        //    this._isCatered = true;
        //} else {
        //    this._isCatered = false;
        //}

    };

    Party.prototype.checkIsBirthday = function () {
        return this._isBirthday;
    };

    Party.prototype.setIsBirthday = function (value) {
        value ? this._isBirthday = true : this._isBirthday = false;

    };

    Party.prototype.getOrganiser = function () {
        return this._organiser;
    };

    Party.prototype.setOrganiser = function (value) {
        if (!(value instanceof eventSystem._Employee)) {
            throw new ArgumenException("Organiser should be of Employee type");
        }

    };

    eventSystem.party = function (options) {
        return new Party(options)
    }

})(app);

