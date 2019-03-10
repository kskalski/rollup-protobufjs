# Rollup - Protobuf.js Issue Example
This repository illustrates an issue packaging protobufjs inside of a bundle built by rollup.

References:

 - [https://rollupjs.org/guide/en](https://rollupjs.org/guide/en)
 - [http://dcode.io/protobuf.js/](http://dcode.io/protobuf.js/)
 
 ## Instructions:
 
 To replicate the issue:
 
  - `npm i`
  - `npm run build`
  - Open `index.html` in you browser, and view the error in the console.
  
 ## Error
 
 ```js
Uncaught TypeError: Cannot read property 'emptyArray' of undefined
    at types.js:110
    at createCommonjsModule (index.umd.js:10)
    at index.js:65
    at index.umd.js:4
    at index.umd.js:5
```

## Notes
 - The issue seems to be that the `util` object is being referenced before it is defined.
 - There are several warnings about circular dependencies during the rollup build.
 - ProtobufJS itself seems to be packaged into a bundle using browserify. This bundle seems to work. 