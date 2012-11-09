(function() {

  define([], function() {
    var Calculator;
    return Calculator = (function() {

      function Calculator() {}

      Calculator.prototype.currentValue = 0;

      Calculator.prototype.add = function() {
        var num, _i, _len;
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          num = arguments[_i];
          this.currentValue += num;
        }
        return this.currentValue;
      };

      Calculator.prototype.subtract = function() {
        var num, _i, _len;
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          num = arguments[_i];
          this.currentValue -= num;
        }
        return this.currentValue;
      };

      Calculator.prototype.multiply = function() {
        var num, value, _i, _len;
        value = Array.prototype.shift.call(arguments);
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          num = arguments[_i];
          value *= num;
        }
        return value;
      };

      Calculator.prototype.divide = function() {
        var num, value, _i, _len;
        value = Array.prototype.shift.call(arguments);
        for (_i = 0, _len = arguments.length; _i < _len; _i++) {
          num = arguments[_i];
          value /= num;
        }
        return value;
      };

      return Calculator;

    })();
  });

}).call(this);
