# React Redux Express SSR Boilerplate

This boilerplate offers the following stack:

* Node/Express backend with REST API and Server Side Rendering
* React frontend with Redux

For routing, the application uses React Router v4.

Frontend is built on [Create React App](https://github.com/facebookincubator/create-react-app), and because of this, most build configuration is currently hidden. For information on how to use Create React App, refer to its documentation.

## Missing features

* [SSR support for Redux](http://redux.js.org/docs/recipes/ServerRendering.html)
* API to use backend

## Available Scripts

In the project directory, you can run:

### `yarn start`

* Runs the app in the development mode
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser
* The page will reload if you make edits
* You will also see any lint errors in the console

### `yarn run start:dev-server`

* Runs server in development mode

### `yarn run start:prod-server`

* Runs server in production mode

### `yarn test`

* Launches the test runner in the interactive watch mode

### `yarn run build`

* Builds the app for production to the `build` folder
* It correctly bundles React in production mode and optimizes the build for the best performance
* The build is minified and the filenames include the hashes
* Your app is ready to be deployed!

After building, you can serve it locally with serve:

`yarn add global serve` or `npm install -g serve`
`serve -s build`

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Folder Structure

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack. You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`

You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.

## API

A proper API for backend is not yet implemented. However, in development mode, you can access backend by using fetch command together with proxy setting in package.json. Example:

```javascript
fetch('/api/', {
  accept: 'application/json',
  }).then((response) => {
    console.log(response);
});
```