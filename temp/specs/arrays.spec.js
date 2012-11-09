(function() {

  define([], function() {
    return describe("Arrays", function() {
      it("should create arrays", function() {
        var emptyArray, multiTypeArray;
        emptyArray = [];
        expect(emptyArray).to.be.a('array');
        expect(emptyArray.length).to.equal(0);
        multiTypeArray = [
          0, 1, "two", function() {
            return 3;
          }
        ];
        expect(multiTypeArray[0]).to.be.a('number');
        expect(multiTypeArray[2]).to.be.a('string');
        return expect(multiTypeArray[3]).to.be.a('function');
      });
      it("should understand array literals", function() {
        var array;
        array = [];
        array[0] = 1;
        return expect(array).to.deep.equal([1]);
      });
      it("should understand how to slice arrays", function() {
        var array;
        array = ["peanut", "butter", "and", "jelly"];
        return expect(array.slice(0, 1)).to.deep.equal(["peanut"]);
      });
      it("should understand array references", function() {
        var array, assignedArray, passedByReference;
        array = ["zero", "one", "two", "three", "four", "five"];
        passedByReference = function(refArray) {
          return refArray[1] = "changed in function";
        };
        passedByReference(array);
        expect(array[1]).to.equal("changed in function");
        assignedArray = array;
        assignedArray[5] = "changed in assignedArray";
        return expect(array[5]).to.equal('changed in assignedArray');
      });
      it("should understand push and pop", function() {
        var array, poppedValue;
        array = [1, 2];
        array.push(3);
        expect(array).to.deep.equal([1, 2, 3]);
        poppedValue = array.pop();
        expect(poppedValue).to.equal(3);
        return expect(array).to.deep.equal([1, 2]);
      });
      return it("should know about shifting arrays", function() {
        var array, shiftedValue;
        array = [1, 2];
        array.unshift(3);
        expect(array).to.deep.equal([3, 1, 2]);
        shiftedValue = array.shift();
        expect(shiftedValue).to.equal(3);
        return expect(array).to.deep.equal([1, 2]);
      });
    });
  });

}).call(this);
