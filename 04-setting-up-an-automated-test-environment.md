# Setting Up an Automated Test Environment

## Installing Jest

1.  Make sure you have [node](https://nodejs.org/en/download/) installed first. To do this, open a terminal or command prompt and check that you can run:

        npm -v

2.  Create a project directory and go into it:

        $ mkdir tax-calculator
        $ cd tax-calculator

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

1.  Create a file `src/hello.test.js` with the contents:

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


## Enabling ES6 `import`/`export` Syntax

1. Refactor the test into two files: `hello.test.js` and `hello.js`:

    - `hello.js`:

          function hello() {
              return 'hello, world!';
          }

    - `hello.test.js`:

          test('hello function should return "hello, world!"', () => {
            expect(hello()).toBe('hello, world!');
          });

2. Add in `export` and `import` declarations:

    - `hello.js`, at bottom:

          // ...

          export { hello };

    - `hello.test.js`

          import { hello } from './hello';
          
          // ...

3. Run your tests. You should see an error:

       FAIL  src/myfile.js
        ● Test suite failed to run

          Jest encountered an unexpected token
          ...
          import { c } from "./myutil";
                 ^

          SyntaxError: Unexpected token {

4. To fix this, we'll configure Jest to compile your files first using Babel:

    1. Install `@babel/preset-env`:

           npm install @babel/preset-env --save-dev

    2. Add this `babel.config.js` config file to your project root:

        ```
        module.exports = {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  node: "current"
                }
              }
            ]
          ]
        };
        ```

5. Test again and check that everything works.

### What you just did

You configured Jest to compile your ES6 sources down to ES5
before running your tests. This includes, of course, the
`import` and `export` syntax.

When Jest (or specifically, `babel-jest`, a plugin) finds a
Babel config file, it automatically runs Babel to compile ES6
to ES5. See
[here](https://jestjs.io/docs/en/getting-started#using-babel)
for more details.

