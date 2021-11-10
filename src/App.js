import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MethodPage from "./components/MethodPage/MethodPage";
import Offers from "./components/Offers/Offers";
import ContactPage from "./components/ContactPage/ContactPage";
import Gallery from "./components/Offers/Gallery";
import Aggiudicazioni from "./components/Aggiudicazioni/aggiudicazioni";
import WorkWithUs from "./components/ContactPage/WorkWithUs";

import "./App.css";

function App() {
  return (
      <div className="App">
        <Router>
          <Header />

          <Switch>
            <Route path="/contatti">
              <ContactPage />
            </Route>

            <Route path="/preventivo">
              <WorkWithUs />
            </Route>

            <Route path="/aggiudicazioni">
              <Aggiudicazioni />
            </Route>

            <Route path="/tuttiGLiEsiti">
              <Gallery />
            </Route>

            <Route path="/ilNostroMetodo">
              <MethodPage />
            </Route>

            <Route path="/offerteTecniche">
              <Offers />
            </Route>

            <Route path="/chiSiamo">
              <About />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
  );
}

export default App;
