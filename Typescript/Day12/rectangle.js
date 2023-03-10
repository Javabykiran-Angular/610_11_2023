"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Rectangle = void 0;
var shape_1 = require("./shape");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(l, b) {
        var _this = _super.call(this) || this;
        _this.length = l;
        _this.breadth = b;
        _this.area = 0;
        return _this;
    }
    Rectangle.prototype.myArea = function () {
        this.area = this.length * this.breadth;
    };
    Rectangle.prototype.display = function () {
        console.log("\n                ------- Rectangle area------\n                Length   :: ".concat(this.length, "\n                Breadth  :: ").concat(this.breadth, "\n                Area     :: ").concat(this.area, "\n            "));
    };
    return Rectangle;
}(shape_1.Shape));
exports.Rectangle = Rectangle;
