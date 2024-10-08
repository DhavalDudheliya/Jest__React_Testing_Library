# Testing in React with Jest and React Testing Library

## What is Testing?
Testing involves checking if the code works as expected by running it under different scenarios. It helps catch bugs, ensure code reliability, and improve overall software quality.

## What is Jest and RTL?
**Jest** is a popular testing framework in the JavaScript ecosystem, designed to work with React applications. It provides a powerful and easy-to-use API for writing tests.

**React Testing Library (RTL)** is a testing utility built on top of Jest that allows testing React components by interacting with them in a way similar to how a user would. It promotes writing maintainable tests by focusing on what the user sees.

## Different Types of Tests
- **Unit Tests**: Test individual units of code in isolation.
- **Integration Tests**: Test how different units of code work together.
- **End-to-End Tests**: Test the entire application from start to finish, as a real user would.

## What is an Automated Test?
Automated tests are scripts that automatically verify if the code behaves as expected without human intervention. They are a crucial part of continuous integration and deployment pipelines.

## Jest Watch Mode
Jest offers a watch mode (`jest --watch`) that re-runs tests when files change, making the development process faster and more efficient.

## Filter Tests
You can filter tests to run only the tests that match a specific pattern by using `jest -t 'test name'` or adding `.only` to specific test blocks.

## Group Tests
Tests can be grouped using the `describe` block in Jest, which helps in organizing related tests together.

## Filename Convention
The recommended convention for test files in Jest is to name them with `.test.js` or `.spec.js` extensions and place them in the same directory as the code they test or in a dedicated `__tests__` folder.

## Code Coverage
Jest provides built-in support for measuring code coverage, which shows how much of the codebase is covered by tests. This can be generated using `jest --coverage`.

## Queries in RTL
RTL provides various query methods to find elements in the DOM for testing purposes.

### Types of Queries
- **getBy**: Throws an error if the element is not found.
- **queryBy**: Returns `null` if the element is not found.
- **findBy**: Returns a promise that resolves when the element is found.

### Priority Order of Queries
1. **getByRole**
2. **getByLabelText**
3. **getByPlaceholderText**
4. **getByText**
5. **getByDisplayValue**
6. **getByAltText**
7. **getByTitle**
8. **getByTestId**

## getBy vs queryBy vs findBy
- **getBy**: Throws immediately if no element is found.
- **queryBy**: Returns `null` if no element is found, useful for asserting that an element is not present.
- **findBy**: Useful for asynchronous tests; returns a promise.

## Manual Queries
Manual queries can be created using `container.querySelector`, though RTL recommends using the built-in queries for better test readability and maintainability.

## Debug Tests
RTL provides a `screen.debug()` function that outputs the current state of the DOM, which is useful for debugging tests.

## Testing Playground
The Testing Playground is a browser-based tool to help you find the best queries to use in your tests. It visually shows the current state of the DOM.

## Testing User Interactions
RTL provides tools to simulate user interactions such as clicking, typing, etc.

### Pointer APIs
Used to simulate pointer events like `click`, `dblClick`, `hover`, etc.

### Keyboard APIs
Used to simulate keyboard events such as `type`, `press`, `tab`, etc.

## Mocking Functions with Jest
Jest allows you to mock functions and modules to isolate the code under test, making it easier to test complex interactions.

## Mocking HTTP Requests with MSW
**MSW (Mock Service Worker)** allows you to mock network requests in tests, enabling you to test how your application interacts with APIs without making actual HTTP requests.
