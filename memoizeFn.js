function memoize(fn) {
    const cache = {};
  
    return function (...args) {
      const key = args.toString(); // Generate a key for the cache based on the arguments
  
      if (cache[key] !== undefined) {
        return cache[key]; // Return cached result if it exists
      }
  
      const result = fn(...args); // Compute the result if not cached
      cache[key] = result; // Store the result in the cache
      return result;
    };
  }
  
  // Example of a recursive factorial function
  function factorial(n) {
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  }
  
  // Memoizing the factorial function
  let memoizedFn = memoize(factorial);
  
  // Calling the memoized factorial function
  let a = memoizedFn(100);
  let b = memoizedFn(100);
  
  console.log(a); // Outputs the factorial of 100
  console.log(b); // Outputs the cached result of the factorial of 100