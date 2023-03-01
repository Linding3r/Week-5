//Observe: no return type, no type on parameters
function add(n1, n2){
    return n1 +n2;
 }
 
const sub = function(n1,n2){
    return n1 - n2
 } 
const cb = function(n1,n2, callback){
    return "Result from the two numbers: "+n1+"+"+n2 + "=" + callback(n1,n2);
}

const mul = function(n1,n2){
    return n1 * n2
}

//console.log(add(1,2))     // What will this print?                                  - 3
//console.log(add)          // What will it print and what does add represent?        - [Function: add]
//console.log(add(1,2,3)) ; // What will it print                                     - 3
//console.log(add(1));      // What will it print                                     - NaN
//console.log(cb(3,3,add)); // What will it print                                     - Result from the two numbers: 3+3=6
//console.log(cb(4,3,sub)); // What will it print                                     - Result from the two numbers: 4+3=1
//console.log(cb(3,3,add())); // What will it print (and what was the problem)        - Result from the two numbers: 3+3=NaN
//console.log(cb(3,"hh",add));// What will it print                                   - Result from the two numbers: 3+hh=3hh

  
//console.log(mul(2,3))       //                                                      - 6
//console.log(cb(3,3, mul)) //                                                        - Result from the two numbers: 3+3=9