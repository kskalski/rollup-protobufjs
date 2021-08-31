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
field.js:6 Uncaught TypeError: Cannot read property 'prototype' of undefined
    at field.js:6
    at index.umd.js:4
    at index.umd.js:5
```

## Notes
- object.js and ReflectionObject var are initialized after their uses in field.js
