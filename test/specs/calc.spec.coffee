define ['scripts/calculator'], (Calculator) ->
  describe "Calculator", ->
    beforeEach ->
      @calc = new Calculator()

    it "should store the current value at all times", ->
      expect(@calc).to.have.property('currentValue')
      expect(@calc.currentValue).to.equal(0)

    describe "when subtracting numbers", ->
      it "should be able to subtract numbers", ->
        expect(@calc.subtract(5)).to.equal(-5)
      it "should subtract multiple numbers", ->
        expect(@calc.subtract(10,5,1)).to.equal(-16)

    describe "when adding numbers", ->   
      it "should be able to add numbers", ->
        expect(@calc.add(5)).to.equal(5)
        expect(@calc.add(5)).to.equal(10)
      it "should add multiple numbers", ->
        expect(@calc.add(1,2,3,4)).to.equal(10)

    describe "when multipling numbers", ->
      it "should be able to multiply multiple numbers", ->
        expect(@calc.multiply(1,2,3)).to.equal(6)
        expect(@calc.multiply(3,10,0)).to.equal(0)
        expect(@calc.multiply(10,-1)).to.equal(-10)

    describe "when dividing numbers", ->
      it "should be able to divide multiple numbers", ->
        expect(@calc.divide(6,3)).to.equal(2)
        expect(@calc.divide(6,6)).to.equal(1)

      it "should throw if attempting to divide by zero", ->
        expect( -> 
          @calc.divide(10,1)
        ).to.throw()
      

