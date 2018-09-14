// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let result;
  if (someValue <= 400) {
      result = "This one is on me!";
    } else if (someValue > 2500){
      result = "No can do."
    } else {
      result = "I will gladly take your thirty bucks."
    }

  return result;
}
