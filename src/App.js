import Header from "./components/Header";
import Router from "./components/Router";
import './asset/sass/main.scss'
import {
  BrowserRouter,
} from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <BrowserRouter>
          <Header></Header>
          <Router />
    </BrowserRouter>
  );
}

export default App;
