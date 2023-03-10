"use strict";
exports.__esModule = true;
exports.EmployeeDetails = void 0;
var department_1 = require("./department");
var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails(f, l, sal, role) {
        this.fname = f;
        this.lname = l;
        this.salary = sal;
        this.dept = new department_1.Department(role);
    }
    EmployeeDetails.prototype.display = function () {
        console.log("\n            ------Employee Details---------\n            First Name     :: ".concat(this.fname, "\n            Last Name      :: ").concat(this.lname, "\n            Salary         :: ").concat(this.salary, "\n            Department     :: ").concat(this.dept.getRole(), "\n        "));
    };
    return EmployeeDetails;
}());
exports.EmployeeDetails = EmployeeDetails;
