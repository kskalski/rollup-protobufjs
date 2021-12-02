# Rollup - grpc-js Issue Example
This repository illustrates an issue packaging grpc-js inside of a bundle built by rollup.

References:

 - [https://rollupjs.org/guide/en](https://rollupjs.org/guide/en)
 - [https://www.npmjs.com/package/@grpc/grpc-js](https://www.npmjs.com/package/@grpc/grpc-js)
 
 ## Instructions:
 
 To replicate the issue:
 
  - `npm i`
  - `npm run build`
  
 ## Output
 
 Build process doesn't produce any output, I suppose the plugin crashes internally

 ```
> protobuf-rollup@1.0.0 build
> rollup -c


index.js → dist/index.umd.js...
```

 ## Note

 The problem appears due to simply including ``import * as grpc from "@grpc/grpc-js";``, when this line is commented the build works again.
