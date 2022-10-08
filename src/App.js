import Header from "./components/Header";
import Router from "./components/Router";
import './asset/sass/main.scss'
import {
  BrowserRouter,
} from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
          <Header></Header>
          <Router />
    </BrowserRouter>
  );
}

export default App;
