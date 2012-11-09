define [], () ->

  describe "Arrays", ->
    it "should create arrays", ->
      emptyArray = []
      expect(emptyArray).to.be.a('array')
      expect(emptyArray.length).to.equal(0)

      multiTypeArray = [
        0,
        1,
        "two",
        ->
          return 3
      ]

      expect(multiTypeArray[0]).to.be.a('number')
      expect(multiTypeArray[2]).to.be.a('string')
      expect(multiTypeArray[3]).to.be.a('function')

    it "should understand array literals", ->
      array = []

      array[0] = 1
      expect(array).to.deep.equal([1])

    it "should understand how to slice arrays", ->
      array = ["peanut", "butter", "and", "jelly"]

      expect(array.slice(0,1)).to.deep.equal(["peanut"])

    it "should understand array references", ->
      array = ["zero", "one", "two", "three", "four", "five"]

      passedByReference = (refArray) ->
        refArray[1] = "changed in function"

      passedByReference(array)
      expect(array[1]).to.equal("changed in function")

      assignedArray = array
      assignedArray[5] = "changed in assignedArray"
      expect(array[5]).to.equal('changed in assignedArray')


    it "should understand push and pop", ->
      array = [1,2]
      array.push(3)

      expect(array).to.deep.equal([1,2,3])

      poppedValue = array.pop()
      expect(poppedValue).to.equal(3)
      expect(array).to.deep.equal([1,2])

    it "should know about shifting arrays", ->
      array = [1,2]

      # Add's to the front of the array
      array.unshift(3)
      expect(array).to.deep.equal([3,1,2])

      shiftedValue = array.shift()
      expect(shiftedValue).to.equal(3)

      expect(array).to.deep.equal([1,2])


