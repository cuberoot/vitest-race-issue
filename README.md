# Bug Reproduction Example

This project reproduces a bug in vite/vitest that occurs when you mix brower and
non-browser tests in a workspace file. This bug seems to require at least two
non-browser vitest configs and one browser vitest config in the workspace

To reproduce:

    npm install
    # Make sure that there are no pre-optimized dependencies
    rm -rf node_modules/.vite packages/*/node_modules/.vite
    npm test

or just:

    npm run reproduce-bug

When I do this, I see the error:

     RUN  v1.6.0 /Users/mitaylor/Temp/VitestRaceBug
      [browser] Browser runner started at http://localhost:5174/

    ✓ |test1| src/bubblesort.test.ts (5)
    ✓ |test3| src/insertionsort.test.ts (3)

    ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
    TypeError: Cannot read properties of undefined (reading 'imports')
    ❯ node_modules/vite/dist/node/chunks/dep-cNe07EU9.js:52698:47
    ❯ process.processTicksAndRejections node:internal/process/task_queues:95:5
