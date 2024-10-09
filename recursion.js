/** product: calculate the product of an array of numbers. */

function product(nums) {
  if (nums.length === 0) return 1 ;
  
    return nums[0] * product(nums.slice(1));
}  // END product()
 


/** longest: return the length of the longest word in an array of words. */

function longest(words) {
    // Base case
    if (words.length === 0) return 0; 
  
    // Split the first word into letters and get its length
    let letters = words[0].split("");
    let currentLength = letters.length;
  
    // Recursive call 
    let maxLengthOfRest = longest(words.slice(1));

    // Return whichever is longest
    return Math.max(currentLength, maxLengthOfRest);

  }  // END longest()



/** everyOther: return a string with every other letter. */

function everyOther(str, inx=0) {
  // Base Case - no more letters in str
  if (inx >= str.length) {
  return "";
  }
  return str[inx] + everyOther(str, inx + 2);
  }  // END everyOther()



/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
    // Base case: An empty string or a string of length 1 is a palindrome
    if (str.length <= 1) {
      return true;
    }
  
    // Check if the first and last characters match
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
  
    // Recursively check the substring excluding the first and last characters
    return isPalindrome(str.slice(1, -1));
  }  // END isPalindrome




/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Need helper to keep track of index number
  function helper(arr, val, idx) {
    // Base Case - arr empty
    if (arr.length == 0) {
      return -1;
    }
    // if val is found
    if (arr[0] == val) {
    return idx;
    }
    
    return helper(arr.slice(1), val, idx + 1)
 } // END helper()

	// Initial call to helper()
  return helper(arr, val, 0);

}  // END findIndex



/** revString: return a copy of a string, but in reverse. */

function revString(str) {

  // Base Case = no letters left
    if (str.length === 0 ) {
    return "";
    }
  
    // Take the last char & add recursive function call
    return str[str.length -1] + revString(str.slice(0,-1) ) 
  
  }  // END revString()



/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	// create an array to hold all the found string values
	let strArr = [];
  // create an array of an objects values
  let obj1 = Object.values(obj)
  
  // Loop over the object values
	for ( let element of obj1) {
  	// if the element is also an object
  	if (typeof element === 'object') {
    	// run the recursive function to parse the nested object 
		  strArr = strArr.concat(gatherStrings(element));
    
    // check if the found non-object element is a string
    } else if (typeof element === 'string') {
      // If it's a string, add to the array
      strArr.push(element);
    }
  }
// Return the array of found strings
return strArr
}   // END gatherStrings()



/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {
    // Need helper to keep track of index number
    function helper(arr, val, idx) {
      // Base Case - arr empty
      if (arr.length == 0) {
        return -1;
      }
      // if val is found
      if (arr[0] == val) {
      return idx;
      }
      
      return helper(arr.slice(1), val, idx + 1)
   } // END helper()
  
    // Initial call to helper()
    return helper(arr, val, 0);
  
  }  // END binarySearch


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
