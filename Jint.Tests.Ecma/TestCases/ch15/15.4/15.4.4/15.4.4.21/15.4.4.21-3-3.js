/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.21/15.4.4.21-3-3.js
 * @description Array.prototype.reduce - value of 'length' is a number (value is 0)
 */


function testcase() {

        var accessed = false;

        function callbackfn(prevVal, curVal, idx, obj) {
            accessed = true;
            return 2;
        }

        var obj = { 0: 1, 1: 1, length: 0 };

        return Array.prototype.reduce.call(obj, callbackfn, 1) === 1 && !accessed;
    }
runTestCase(testcase);
