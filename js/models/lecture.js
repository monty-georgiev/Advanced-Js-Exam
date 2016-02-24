var app = app || {};

(function (eventSystem) {

    function Lecture(options) {
        eventSystem._Event.call(this, options);
        this._trainer = options.trainer;
        this._course = options.course;
    }

    Lecture.extends(eventSystem._Event);


    Lecture.prototype.getTrainer = function () {
        return this._trainer;
    };

    Lecture.prototype.setTrainer = function (value) {
        if (!(value instanceof eventSystem._Trainer)) {
            throw new ArgumenException("Passed value is not instance of Trainer");
        }

    };

    Lecture.prototype.getCourse = function () {
        return this._course;
    };

    Lecture.prototype.setCourse = function (value) {
        if (!(value instanceof eventSystem._Course)) {
            throw new ArgumenException("Passed value is not instance of Course");
        }
    };

    eventSystem.lecture = function (options) {
        return new Lecture(options)
    };

})(app);



