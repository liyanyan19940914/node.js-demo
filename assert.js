const assert = require('assert');

const obj1 = {
    a:{
        b:1
    }
};

const obj2 = {
    a:{
        b:2
    }
};

const obj3 = {
    a:{
        b:1
    }
};

const obj4 = Object.create(obj1);

//assert.deepEqual(obj1,obj2);  ////AssertionError

assert.deepEqual(obj1,obj3);

//assert.deepEqual(obj1,obj4);  //AssertionError: { a: { b: 1 } } deepEqual {}

assert.deepEqual({a:1},{a:'1'});   //相当于‘==’

assert.deepStrictEqual({a:1},{a:'1'});  //想当于‘===’，AssertionError: { a: { b: 1 } } deepEqual {}