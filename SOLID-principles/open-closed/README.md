# Example of Open-Closed principle

1. Check [Open–closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle).
2. Check example_bad.js and example_good.js, and compare them. In this example, we want to use different cloud services to do the same functionality. In the bad example, we have to modify our class codes to use different cloud services. In the good example, we can create child class extending the base class for our target cloud service, without modifying the base class.
3. Run the following
   - node example_bad.js
   - node example_good.js
