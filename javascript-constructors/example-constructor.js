function ExampleConstructor() {}
console.log('value of prototype of exampleConstructor', ExampleConstructor.prototype);
console.log('typeof prototype of exampleConstructor', typeof ExampleConstructor.prototype);

var newConstructor = new ExampleConstructor();
console.log('value of exampleConstructor with new', newConstructor);

var newInstance = newConstructor instanceof ExampleConstructor;
console.log('newInstance of ExampleConstructor', newInstance);
