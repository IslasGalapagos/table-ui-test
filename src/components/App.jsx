import {hot} from 'react-hot-loader';

class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <h1>Hello</h1>
      </React.StrictMode>
    );
  }
}

export default hot(module)(App);
