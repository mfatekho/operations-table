# Intento Task - Client Application

## Task Description

Create the table of operations entities, which contains two columns [name, status]. When a user clicks by "Create"
button, he sees the operation creation modal. User can input the name of the new operation. After clicking the "Create"
button in the modal, a new operation appears in the table with the status In Progress. The Backend service must finish
the new operation with Done or Failed after 5 seconds. You decide on your own how the user will know about the updates
of the status column in the operations list.

## Implementation Details

Technologies:

- [React](https://reactjs.org/)
- [Material-UI](https://material-ui.com/)
- [TypeScript](https://www.typescriptlang.org/)


## Deploy:
Server is deployed on Heroku: [https://operations-intento.herokuapp.com/](https://operations-intento.herokuapp.com/)

## Note:

Included `build` folder for deploy purposes, as heroku slug is limited in memory and this limit is exceeded during the
step on installing clients' dependencies

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
