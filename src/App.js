import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Dashboard from './layouts/Dashboard';
import HomeDashboard from './layouts/HomeDashboard';



function App() {
  return (

    <div className="App">
      {/* <ToastContainer position="bottom-right"/> */}
      <HomeDashboard></HomeDashboard>
    </div>
  );
}

export default App;
