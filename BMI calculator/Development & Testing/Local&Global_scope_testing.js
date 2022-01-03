/*                                            Testing Global & Local Scope
Function Scope
JavaScript has function scope: Each function creates a new scope.
Variables defined inside a function are not accessible (visible) from outside the function.

Local scope/Global scope
JavaScript has function scope: Each function creates a new scope. Scope determines the accessibility 
(visibility) of these variables. Variables defined inside a function are not accessible (visible) from 
outside the function.

Local JavaScript Variables
Variables declared within a JavaScript function, become LOCAL to the function. Local variables have Function 
scope: They can only be accessed from within the function.  Since local variables are only recognized inside 
their functions, variables with the same name can be used in different functions. Local variables are created 
when a function starts, and deleted when the function is completed.

Global JavaScript Variables
A variable declared outside a function, becomes GLOBAL. A global variable has global scope: All scripts 
and functions on a web page can access it.
*/

//                              Function Testing | Global & Local scope

// Local scope (function) - defining variable inside a function (we can say that the variable is within the functions global scope to confuse things but you get the picture)
const newFunc1 = function () {
  y = 12;
  console.log(y);
  return y;
};
console.log(newFunc1());
console.log(y); // this will not be accesible outside of the function as this variable has only been defined within the local scope of the function

// Global scope
let x = 10; ///Variable x defined in global scope (let keyword enabling later mutation)
const new_Func = function () {
  x = 12; //re-assign new value to variable x
  console.log(x); // log to developers console for analysis
  return x; // return keyword will return the value of x to the function
};
console.log(new_Func());
console.log(x);
//

/*
Note
Python programming differs in which we have the global keyword that we can use within functions to mutate 
the variable outside of the function. Defintiely an interesting and safe feature.
*/
