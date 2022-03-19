// test file for functions.js

// Import functions
const functions = require('./functions');

describe("Calculator tests", () => {
  // initialize variables to compare
  var input1 = 0
 var input2 = 0
 
 // Executed once before every execution
 beforeAll(() => {
   console.log("beforeAll called");
 });
 
 // Executed once after every execution
 afterAll(() => {
   console.log("afterAll called");
 });

// Executed once before every test
  beforeEach(() => {
   console.log("beforeEach called");
   input1 = 1;
   input2 = 2;
 });

 // Executed once after every test
  afterEach(() => {
   console.log("afterEach called");
 });
 

 test('adding 1 + 2 should return 3', () => {

  // Calls the function add
   var result = functions.add(input1,input2)
  
  // Expected value
   expect(result).toBe(3);
 });

 test('User shoud be Marco Polo object', () => {
  expect(
      functions.createUser()
      ).toStrictEqual({ firstName: 'Marco', lastName: 'Polo'}); 
 });
})