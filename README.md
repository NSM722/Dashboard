# Dashboard - Single Page Application

This is a single page application that fetches customer data from an API and lists the data in cards using grid markup

The data is paginated and limited to 3 customers per page

One can search for customers strictly per page by name, email or city - the search filter is case-sensitive

The application was created using Functional Components and React Hooks

## Requirements

You will need **Node.js** installed in order to get started. The Node Package Manager will allow installation of third party libraries. Therefore download the required version from [node.js.org](https://nodejs.org/en/)

## Dependencies

- react and react-dom [Getting Started With React](https://reactjs.org/docs/getting-started.html)
- react-testing-library [React Testing Library](https://reactjs.org/docs/testing.html)

### How to run the App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- This will install a lightweight development server
- Webpack which will bundle up the files
- Babel which will compile JavaScript code to JSX

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### About Testing

- test: test takes two parameters, the first one is the description of the test
  and the second one is a function which contains the implementation of the test

- expect - is where we write our assertion

- getByTestId: getByTestId is a function, we pass the data-testid as its argument to target the element

- toBeInTheDocument: a custom matcher provided by jest-dom, it allows you to check if the target element is rendered into the DOM properly

### Styling - React Bootstrap CDN

Add Bootstrap using Bootstrap CDN, include the link to the CDN in the **head section** of the App entry file: public/index.html

Used bootstrap classes throughout the whole app for:

- layout
- typography
- font/text colour

[React Bootstrap](https://react-bootstrap.github.io/getting-started/why-react-bootstrap/ "Find out more")

### Implementing Flag icons

Get the library using CDN and include this in the **head section** of the App entry file: public/index.html

```
css squared flag
<span class="flag-icon flag-icon-squared flag-icon-country code"></span>
```

### Enabling Pagination

Pagination is the display of data in a sequence of pages allowing the user to navigate from one page to another with the click of a button

Bootstrap Pagination is built with list HTML elements so **screen readers can announce the number of available links**. One uses a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies

In addition, as pages likely have more than one such navigation section, it’s advisable to provide a descriptive aria-label for the `<nav>` to reflect its purpose