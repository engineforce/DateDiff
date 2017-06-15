# DateDiff
Compute the difference between the two dates in days

## How to run?

```sh
npm install
npm start  # run unit tests with coverage (output: ./coverage/lcov-report/index.html)
```

## Run CLI

```sh
node datediff-cli "01 01 1990" "01 03 2017"
node datediff-cli "01 01 1990" "01 03 9999"
node datediff-cli "999 02 1990" "01 03 9999"  # generate error
```

## Notes:

It requires ES6 support, i.e., Node.js v6.10.0+



