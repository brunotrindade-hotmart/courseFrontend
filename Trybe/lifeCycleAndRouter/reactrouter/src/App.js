import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={About} />
      <Route path="/profile/:id" render={ (props) => <Profile {...props} name="Bruno"/> } />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
