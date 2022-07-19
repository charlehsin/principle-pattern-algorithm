# Example of Interface segregation principle

1. Check [Interface segregation principle](https://en.wikipedia.org/wiki/Interface_segregation_principle).
2. Check example_bad.ts and example_good.ts, and compare them. In this example, we show that the interface should include only the methods that all the classes implementing this interface will need. When a class needs to implement an interface method that it does not need, it is a violation of this principle.
   - Note: JavaScript does not have interface; therefore, we use TypeScript here.
3. Install TypeScript by running the following.
   - npm i -D typescript
4. Run the following to get X.js file from X.ts file.
   - npx tsc example_bad.ts
   - npx tsc example_good.ts
5. Run the following
   - node example_bad.js
   - node example_good.js
