import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home></Home>
        </Route>
        <Route path="/movie/:id">
          <Detail></Detail>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
