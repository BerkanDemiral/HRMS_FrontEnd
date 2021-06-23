import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Login from './layouts/Login';
import Content from './layouts/Content';


function App() {
  return (
    <div className="App">
      <Navi />
      <div className="main">
        <Dashboard />
      </div>
      <Content />
    </div>
  );
}

export default App;
