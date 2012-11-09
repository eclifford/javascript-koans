define [], () ->
  class Calculator 
    currentValue: 0
    add: () ->
      for num in arguments
        @currentValue += num
      return @currentValue

    subtract: () ->
      for num in arguments
        @currentValue -= num
      return @currentValue

    multiply: () ->
      # Get & Remove the first value
      value = Array.prototype.shift.call(arguments)
      for num in arguments
        value *= num
      return value

    divide: () ->
      value = Array.prototype.shift.call(arguments)
      for num in arguments
        # if num is 0
        #   throw new Error('cannot divide by zero')

        value /= num
      return value


