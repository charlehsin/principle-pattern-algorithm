# Example of Single Responsibility principle

1. Check [Single-responsibility principle](https://en.wikipedia.org/wiki/Single-responsibility_principle).
2. Check example_bad.js and example_good.js, and compare them. This is an example in class level. In this example, logging should not be part of Account class. Most likely, in your project, logging will be used by any other classes and should be implemented in a standalone logging class.
3. Run the following
   - node example_bad.js
   - node example_good.js
