var app = app || {};


(function (eventSystem) {

    function Trainer(name, workHours) {
        eventSystem._Employee.call(this, name, workHours);
        this.courses = [];
        this.feedbacks = [];
    }

    Trainer.extends(eventSystem._Employee);

    Trainer.prototype.addFeedback = function (feedback) {
        if (testForValidStringInput(feedback)) {
            this.feedbacks.push(feedback);
        } else {
            throw new ArgumenException("Feedback should be a string.")
        }
    };

    Trainer.prototype.addCourse = function (course) {
        if (course instanceof eventSystem._Course) {
            this.courses.push(course);
        } else {
            throw new ArgumenException("Value should be an instance of type Course")
        }
    };

    eventSystem._Trainer = Trainer;
    eventSystem.trainer = function (name, workHours) {
        return new Trainer(name, workHours);
    }

})(app);