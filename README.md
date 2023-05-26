# Blogify Frontend

This is the React frontend for the Blogify web app.

## Folder Structure

The folder structure for this project follows the recommended conventions for a typical React project:

```editorconfig
blogify/
  node_modules/
  public/
    index.html
    favicon.ico
  src/
    components/
      App.js
      Header.js
      PostList.js
      PostDetail.js
      ...
    pages/
      Home.js
      Post.js
      ...
    services/
      api.js
    utils/
      ...
    App.css
    App.test.js
    index.css
    index.js
    setupTests.js
  README.md
  package.json
```

## Naming Conventions

To keep the codebase organized and easy to navigate, we follow the following naming conventions:

- Component filenames are in PascalCase: Header.js, PostList.js, etc.
- Component folder names are in camelCase: postList/, postDetail/, etc.
- Services filenames are in camelCase: api.js, authService.js, etc.
- Utility filenames are in camelCase: utils.js, constants.js, etc.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

    ```bash
        git clone https://github.com/mulfranck/blogify.git
    ```

2. Install the dependencies:

    ```sh
    cd blogify
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

This will start the app in development mode and open it in your [default browser] at `http://localhost:3000`.

The page will reload automatically when you make changes to the code.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
