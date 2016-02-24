var app = app || {};


(function (eventSystem) {


    function Course(name, numberOfLectures) {
        this._name = name;
        this._numberOfLectures = numberOfLectures;
    }

    Course.prototype.getName = function () {
        return this._name;
    };

    Course.prototype.setName = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Name should be non-empty string");
        }


        if (testForValidStringInput(value)) {
            this._name = value;
        }

    };


    Course.prototype.getNumberOfLectures = function () {
        return this._numberOfLectures;
    };

    Course.prototype.setNumberOfLectures = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Number of lectures should be positive numeric value");
        }

        if (testForValidNumericInput(value)) {
            this._numberOfLectures = value;
        }
    };

    eventSystem._Course = Course;

    eventSystem.course = function (name, numberOfLectures) {
        return new Course(name, numberOfLectures);
    }

})(app);