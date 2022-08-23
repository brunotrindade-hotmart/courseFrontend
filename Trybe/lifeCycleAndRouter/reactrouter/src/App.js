import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/about" component={About} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
