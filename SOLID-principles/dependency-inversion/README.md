# Example of Dependency inversion principle

1. Check [Dependency inversion principle](https://en.wikipedia.org/wiki/Dependency_inversion_principle).
2. Check example_bad.ts and example_good.ts, and compare them. In this example, we show that a higher-level module should use the abstraction of the lower-level module and should not depend on the concrete implementation of the lower-level module.
   - Note: We use TypeScript here as it is easier to show the example this way.
3. Install TypeScript by running the following.
   - npm i -D typescript
4. Run the following to get X.js file from X.ts file.
   - npx tsc example_bad.ts
   - npx tsc example_good.ts
5. Run the following
   - node example_bad.js
   - node example_good.js
