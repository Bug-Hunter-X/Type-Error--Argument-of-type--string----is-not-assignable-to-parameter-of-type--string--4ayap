# TypeScript Type Error: Argument of type 'string[]' is not assignable to parameter of type 'string'

This repository demonstrates a common TypeScript error: passing an array of strings to a function expecting a single string.  The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version.  The error occurs because the `greeter` function is defined to accept a single string, but an array is passed as an argument.

## How to Reproduce

1. Clone this repository.
2. Open `bug.ts` and run it using a TypeScript compiler (tsc) and Node.js.
3. Observe the type error.

## Solution

The solution, shown in `bugSolution.ts`, involves either modifying the `greeter` function to accept an array or checking the input type before processing it.

This example highlights the importance of type safety in TypeScript and the need for careful consideration of function parameters and argument types.