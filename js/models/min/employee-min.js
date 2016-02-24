var app = app || {};


(function (eventSystem) {

    function Employee(name, workHours) {
        this._name = name;
        this._workHours = workHours;
    }

    Employee.prototype.getName = function () {
        return this._name;
    };

    Employee.prototype.setName = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Name should be non-empty string");
        }

        if (testForValidStringInput(value)) {
            this._name = value;
        }
    };

    Employee.prototype.getWorkhours = function () {
        return this._workHours;
    };

    Employee.prototype.setWorkhours = function (value) {
        if (value == null || value == "") {
            throw new ArgumenException("Work hours should be positive numeric value");
        }

        if (testForValidNumericInput(value)) {
            this._workHours = value;
        }

    };

    eventSystem._Employee = Employee;

    eventSystem.employee = function (name, workHours) {
        return new Employee(name, workHours);
    };

})(app);

