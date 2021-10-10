import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from 'store';
import './App.css';
import RouterFile from './containers/Routes/Route';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RouterFile />
      </Router>
    </Provider>
  );
}

export default App;
