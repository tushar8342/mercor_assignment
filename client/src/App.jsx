// import logo from './logo.svg';
import './App.css';
import TextEditor from './Component/TextEditor';
import { BrowserRouter as Router, Route, Routes, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact>
            <TextEditor />
          </Route>

          <Route path='/data' exact>
            Data
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
