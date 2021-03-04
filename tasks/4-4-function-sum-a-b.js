'use strict';

function sum(a) {
  function someB(b) {
    function someC(c) {
      function someD(d) {
        return a + b + c + d;
      }
      return someD;
    }
    return someC;
  }
  return someB;
}

// function sum(a) {
//   return function(b) {
//     return function(c) {
//       return function(d) {
//         return a + b + c + d;
//       }
//     }
//   }
// }

// function sum(a) {
//   return b => c => d => a + b + c + d;
// }

//const sum = a => b => c => d => a + b + c + d;

alert(sum(5)(6)(4)(4));//19
