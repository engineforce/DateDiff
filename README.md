# DateDiff
Compute the difference between the two dates in days

## How to run?

```sh
npm install
npm start       # run unit tests with coverage (output: ./coverage/lcov-report/index.html)
```
## Run in JavaScript

```javascript
var datediff = require("../index");
datediff("01 01 1990", "01 01 1990");     // 0
datediff("01 01 1990", "01 03 2017");     // 9921
datediff("01 01 1990", "01 03 9999");     // 2925286
datediff("29 02 1990", "01 03 9999");     // generate error
```

## Run in CLI

```sh
node datediff-cli "01 01 1990" "01 01 1990"     # 01 01 1990, 01 01 1990, 0
node datediff-cli "01 01 1990" "01 03 2017"     # 01 01 1990, 01 03 2017, 9921
node datediff-cli "01 01 1990" "01 03 9999"     # 01 01 1990, 01 03 9999, 2925286
node datediff-cli "29 02 1990" "01 03 9999"     # generate error
```

## Notes:

It requires ES6 support, e.g., Node.js v6.10.0+



