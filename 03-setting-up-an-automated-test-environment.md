# Setting Up an Automated Test Environment

## Installing Jest

1.  Make sure you have a have [node](https://nodejs.org/en/download/) installed first. To do this, open a terminal or command prompt and check that you can run:

        npm -v

2.  Create a project directory and go into it:

        $ mkdir my-project
        $ cd my-project

3.  Initialise your project's `package.json` file:

        $ npm init -f

4.  To install [Jest](https://jestjs.io), run:

        npm install --save-dev jest

5.  Modify your `package.json` so that its `scripts` section looks like this:

        ...
        "scripts": {
          "test": "jest"
        },
        ...

## Writing a Test to Check Our Installation

Now to create a test file.

1.  Create a file `hello.test.js` with the contents:

        test('hello function should return "hello, world!"', () => {
          expect(hello()).toBe('hello, world!');
        });

2.  The test should fail. Check that it does by running all tests:

        $ npm test

3.  Modify the test to look like this:

        test('hello function should return "hello, world!"', () => {

          function hello() {
            return 'hello, world!';
          }

          expect(hello()).toBe('hello, world!');
        });

4.  Run your test again and make sure it passes.
