import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";

export default () => (
  <Switch>
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/contact" component={Contact} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/services" component={Services} />
    <Route path="/" component={Home} />
  </Switch>
);
