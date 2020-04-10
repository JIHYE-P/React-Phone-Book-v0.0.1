### `contextAPI란`
데이터를 전역적으로 사용되어야 할 때 사용된다. root 컴포넌트의 value 값과 value 값을 변경하는 handleChangeValue 함수가 있다면
value라는 값을 컴포넌트 F와 J에서 보여주고 있고, value 값을 변경시키는 함수는 G컴포넌트에 있다고 가정하면
value와 함수는 props로 하위 컴포넌트에게 전달해주게 된다.
value값은 Root->A->B->F, Root->H->J  / 함수는 Root->A->B->E->G 전달
컴포넌트의 깊이가 깊어질수록 다루는 데이터도 많아지고, 유지보수가 어렵다. 
이를 contextAPI 를 통하여 글로벌 전역 상태로 관리할 수 있으면 꽤나 편리하다.
여러 컴포넌트를 거쳐 전달하는것이 아니라 context를 통해서 원하는 값이나 함수를 전달할 수 있게된다.

### `HOC (Higher-order Component)`
리액트 컴포넌트를 인자로 받아서 다른 리액트 컴포넌트를 반환하는 함수를 고차함수라고 한다.
컴포넌트 로직을 재사용하기 위한 리액트의 고급기술이다. 함수로서 컴포넌트를 인자로 받아 새로운 컴포넌트를 리턴합니다.
첫번째 파라미터는 wrapped 컴포넌트이며, 두 번째 파라미터로 DataSource와 현재 props값을 받습니다
리액트 컴포넌트를 작성하게 될 때 반복될 수 있는 코드들을 HoC를 만들어서 해결할 수 있다.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
