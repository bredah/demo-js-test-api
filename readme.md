# API Testing

This project presents some ways to perform API tests: unit (mocha) and behavior (cucumber)

- **unit**: presents a closer view of development in the form of creating unit tests.
- **behavior**: presents the behavioral test, using a common language so that all members of the project can interpret, thus allowing everyone to add, modify and remove the tests created.

- [API Testing](#api-testing)
  - [Prepare](#prepare)
  - [Execution](#execution)
    - [Execution of tests using mocha](#execution-of-tests-using-mocha)
    - [Execution of tests using cucumber](#execution-of-tests-using-cucumber)


## Prepare

Install the project dependencies:

```sh
npm install
```

## Execution

### Execution of tests using mocha
  
- Windows

```sh
set API_URL=https://petstore.swagger.io
npm run test:mocha
```

- Linux & Mac
  
```sh
API_URL=https://petstore.swagger.io npm run test:mocha
```

Output: console and html report (./mochawesome-report/mochawesome.html)

### Execution of tests using cucumber

- Windows

```sh
set API_URL=https://petstore.swagger.io 
npm run test:cucumber
```

- Liunux & Mac

```sh
API_URL=https://petstore.swagger.io npm run test:cucumber
```

Output: console and html report (./cucumber-report.html)