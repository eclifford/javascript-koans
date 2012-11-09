(function() {

  define(['scripts/calculator'], function(Calculator) {
    return describe("Calculator", function() {
      beforeEach(function() {
        return this.calc = new Calculator();
      });
      it("should store the current value at all times", function() {
        expect(this.calc).to.have.property('currentValue');
        return expect(this.calc.currentValue).to.equal(0);
      });
      describe("when subtracting numbers", function() {
        it("should be able to subtract numbers", function() {
          return expect(this.calc.subtract(5)).to.equal(-5);
        });
        return it("should subtract multiple numbers", function() {
          return expect(this.calc.subtract(10, 5, 1)).to.equal(-16);
        });
      });
      describe("when adding numbers", function() {
        it("should be able to add numbers", function() {
          expect(this.calc.add(5)).to.equal(5);
          return expect(this.calc.add(5)).to.equal(10);
        });
        return it("should add multiple numbers", function() {
          return expect(this.calc.add(1, 2, 3, 4)).to.equal(10);
        });
      });
      describe("when multipling numbers", function() {
        return it("should be able to multiply multiple numbers", function() {
          expect(this.calc.multiply(1, 2, 3)).to.equal(6);
          expect(this.calc.multiply(3, 10, 0)).to.equal(0);
          return expect(this.calc.multiply(10, -1)).to.equal(-10);
        });
      });
      return describe("when dividing numbers", function() {
        it("should be able to divide multiple numbers", function() {
          expect(this.calc.divide(6, 3)).to.equal(2);
          return expect(this.calc.divide(6, 6)).to.equal(1);
        });
        return it("should throw if attempting to divide by zero", function() {
          return expect(function() {
            return this.calc.divide(10, 1);
          }).to["throw"]();
        });
      });
    });
  });

}).call(this);
