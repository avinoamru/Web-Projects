"use strict";
exports.__esModule = true;
// This is both questions I hust used the arrow function
var calc = function (num1, num2, callback) {
    if (typeof callback == "function") {
        return callback(num1, num2);
    }
};
calc(2, 4, function (num1, num2) {
    return num1 + num2;
});
/* A promise is a try and catch in an easier syntax.
   You define what to do after a specific code runs and what to do if there is an error.

   Here's an example:
*/
var checkCalc = new Promise(function (res, reject) {
    var calcRes = calc(3, 5, function (n1, n2) {
        return n1 * n2;
    });
    if (calcRes > 10) {
        setTimeout(function () {
            res("Calculation is bigger then 10");
        }, 100);
    }
    else {
        setTimeout(function () {
            reject('Calculation is smaller then 10');
        }, 100);
    }
});
checkCalc.then(function (message) {
    console.log("this is a then", message);
})["catch"](function (message) {
    console.log("this is a catch", message);
});
