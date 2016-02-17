var number = ['123-456-7777', '963-481-7945', '111-222-3333'];
var number1 = ['555-555-5555','111-111-1111','555-555-5456','222-121-2121'];
var number2 = ['324-547-5643', '958-353-2616','421-492-9506','429-591-0930','493-952-0153'];
var number3 = ['532-515-8545'];

var largestPhoneNumber = function (array) {
      var numSum = [];

      for (var i = 0; i < array.length; i++) {
        var intSum=0;
        var splitChar = array[i].split("",12);   // to split the phone number strings into individual char
            splitChar.splice(3, 1);                // to get rid of "-"
            splitChar.splice(6, 1);

        for(var j = 0; j < splitChar.length; j++){
          intSum += parseInt (splitChar[j]); // convert the individual char into int and add them up
        }
        numSum.push(intSum);                    // push phone numSum into the array
      }

      var indexOfLargestSum = numSum.indexOf(Math.max.apply(null, numSum));

      return array[indexOfLargestSum]
    };

    console.log(largestPhoneNumber(number2));