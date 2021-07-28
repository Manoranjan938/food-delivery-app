import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import RouterFile from './containers/Routes/Route';


function App() {
  return (
    <Router>
      <RouterFile />
    </Router>
  );
}

export default App;
