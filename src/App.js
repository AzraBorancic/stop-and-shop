import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import CategoryView from "./pages/Category/CategoryView";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/categories/:category_name">
            <CategoryView />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default function App() {
  return (
    <Navbar Slot={AppRouter} />
  );
}

// You can think of these components as "pages"
// in your app.

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
