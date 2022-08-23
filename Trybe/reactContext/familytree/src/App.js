import { BrowserRouter, Switch, Route } from "react-router-dom";
import GreatGrandMother from "./component/GreatGrandmother";


export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => (<GreatGrandMother />)}></Route>
      </Switch>
    </BrowserRouter>
  );
}