import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import TransactionTable from "./pages/TransactionTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={Welcome} />
          <Route
            exact
            path="/transactionDetails"
            component={TransactionTable}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
