JEST is a unit testing framework created by FB. 
It was intended to be used with React framework.
Looking at its features, it is widely adopted across JS testing. 
It is a 3rd party terminal. 
JEST should be installed as Dev dependency.

Steps to install Jest:
1. Create a folder
2. Open same folder in a termial and run the following command
npm init -y
3. Install jest as dev dependency
npm install --save-dev jest
4. Open package.json and in scripts point it to jest. 
 "scripts": {
    "test": "jest"
  },
  5. The above step implies that when we run 'npm run jest' Jest will be invoked.
  Jest will check for any test cases and if present will run it. 

  we generally organise test cases into a logical group called test suite.
  With respect to Jest we create, we create test suite using "describe" function

  Describe function takes 2 arguments.
  1. name of the test suite
  2. a function which further consists of test cases

  To create a testc ase we use test funciton
  Test function takes 2 arguments
  1. name of the test case
  2. a function which would include the logic of the test case

  expect is provided by jest and it is used to take result as argument and perform varios matches

  to skip a test we use 'x' before tests. 

  To run single test use 'npm run test -- -t 'String Operators'' 
  or use npm run test -f 'filename.js' -- -t 'String Operators' for running one test in one particular file.
  


