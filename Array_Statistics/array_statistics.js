//......... Array Statistics
// Given an array of numbers:
// Sum → loop, accumulate
// Average = sum / length
// Max / Min → compare each
// Count even/odd → % 2
// Reverse → logic or loop
// Remove duplicates → check existing before adding.


//Function Input takes the array of numbers, splits based on comma, trims spaces for each array item, 
// convert string to float and checks if number/NaN finally push the non NaN into the empty array created. 
    function validArray(str) {
      var parts = str.split(',');      //to split input at , and return the parts of string in an array
      var numbersInArray = [];  //defining empty array for valid numbers
      
      for (var i = 0; i < parts.length; i++) {
      //parts.length--->if array has 5 items then var.length gives the number of items or simply the length of array
        var trimmed = parts[i].trim(); // remove spaces
        if (trimmed !== '') {
          var n = parseFloat(trimmed); // convert a string to number
          if (!isNaN(n)) {
            numbersInArray.push(n); //array.push() is a method to add items to an array at the end
          }
        }
      }
      return numbersInArray; //array of numbers is finally returned
    }
    function compute() 
    {
        var input = document.getElementById('arrInput').value; //input entered by user gets stored here as a string.
        var arr = validArray(input); //return value of divide input is stored in arr, i., valid list of array of numbers
        var out = document.getElementById('out'); //final output that is to be displayed gets stored here.
        
        if (arr.length === 0) {
            out.textContent = 'Please enter at least one valid number.';
            return;
        }
         // Sum of numbers in an array
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        
        // Average of numbers in an array
        var avg = (sum / arr.length).toFixed(2);

        //Max and Min elements in array
        var max = arr[0];
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
            max = arr[i];
            }
            if (arr[i] < min) {
            min = arr[i];
            }
        }

        //Count of even, odd numbers in array + count of Nan's
        var evenCount = 0;
        var oddCount = 0;
        for (var i = 0; i < arr.length; i++) {
            var val = arr[i];
            if (Number.isInteger(val)) {
            if (val % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
            }   
        }

        // To reverse array
        var reverseArray = [];
        for (var i = arr.length - 1; i >= 0; i--) {
            reverseArray.push(arr[i]);
        }

        //To remove duplicate items from the array before displaying in output
        var nonDupArray = [];  //Take an empty array to store unique number array
        for (var i = 0; i < arr.length; i++) //for accessing each item of array
            {
            var exists = false; //flag to know whether the current fetched value is unique or not.
        // linear search in 'unique'
        for (var j = 0; j < nonDupArray.length; j++) //to compare each element of array and store only unique elements into nonDupArray.
                {
            if (nonDupArray[j] === arr[i]) {
                exists = true;
                break;
            }
            }
            if (!exists) {
            nonDupArray.push(arr[i]);
            }
        }

        //To format the input and output arrays
        function fmtArray(a) {
            var s = '';
            for (var i = 0; i < a.length; i++) {
            s += (i === 0 ? '' : ', ') + a[i]; //Ternary operator, if i=0 then nothing if i!=0 then add ,
            }
            return '[' + s + ']';
        }

        // Show output
        var lines = []; //Empty array to store each ouput 
        lines.push('Input: ' + fmtArray(arr)); //adds Input: formatted user input array
        lines.push('Count: ' + arr.length); // adds Count: number of valid numbers i.e, len(arr)
        lines.push('Sum: ' + sum);
        lines.push('Average: ' + avg);
        lines.push('Max: ' + max);
        lines.push('Min: ' + min);
        lines.push('Even (integers only): ' + evenCount);
        lines.push('Odd (integers only): ' + oddCount);
        lines.push('Reversed: ' + fmtArray(reverseArray));
        lines.push('Unique (remove duplicates): ' + fmtArray(nonDupArray));

        out.textContent = lines.join('\n'); //join(\n) helps to store each array output of lines array in a new line.
    }

        function clearAll() {
        document.getElementById('arrInput').value = '';
        document.getElementById('out').textContent = '';
        }
    