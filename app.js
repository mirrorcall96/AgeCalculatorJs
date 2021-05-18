// Create three functions. checkParamsFn, checkOverEighteenFn & calculateAgeFn.
// The first function checks your parameters and returns
// true if all of them are integers, whereas returns false if not.
// The second function is self explanatory.
// The third function, uses the first and second functions to check its inputs
// and returns an error message that starts with "error:"
// This function should return a rounded age.
// READING MATERIALS:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
// https://www.w3schools.com/js/js_dates.asp
// https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript
// HINT: recycling code is never bad practice.

// This functions should check the integrity of the parameters and pass true/false
function checkParamsFn(year, month, day) {
  // Write your code here
  if(Number.isInteger(year) && Number.isInteger(month) && Number.isInteger(day) ) return true;
  else return false;
}

// This functions checks if the person is or above 18 years of age, return true/false
function checkOverEighteenFn(year, month, day) {
  let currentTime = new Date()
  let Thismonth = currentTime.getMonth() + 1
  let Thisday = currentTime.getDate()
  let Thisyear = currentTime.getFullYear()
  if (Thisyear - year > 18) return true;
  else if (Thisyear - year === 18){
    if (month>Thismonth) return true;
    else if (month===Thismonth){
      if(day >=Thisday){
        return true;
      }
      else return false 
    }
    else return false 
  }
  else return false
  
}

function calculateAgeFn(year, month, day) {
  if(!checkParamsFn(year, month, day)) return "error: Bad inputs";
  if(!checkOverEighteenFn(year, month, day)) return "error: Under 18";
  let currentTime = new Date()

  let Thismonth = currentTime.getMonth() + 1
  let Thisday = currentTime.getDate()
  let Thisyear = currentTime.getFullYear()
  return Math.round(((Thisyear-year)*365 + (Thismonth-month)*30 + (Thisday-day)) / 365);
}

// Look at the naming of the functions. it looks like salwaBaqer, where
// the first letter of the first word is small, while the first letter of the
// second word is Capital. This is called "Camel Casing."
// Also the Fn at the end of the function name is short for function.
// str = String, int = Integer, arr = Array, obj = Object, fn = Function
// It's best practice to name your function as to what it does, or your variable
// to what it holds.

module.exports = calculateAgeFn;
