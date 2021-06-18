import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
import Content from './layouts/Content';


function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard/>
      </Container>
      <Content/>
    </div>
  );
}

export default App;
