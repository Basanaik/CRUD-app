import React, { Fragment } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/HeaderComponent/Navbar";
import CreatePost from "./Components/Posts/CreatePost";
import DeletePost from "./Components/Posts/DeletePost";
import DetailsPost from "./Components/Posts/DetailsPost";
import EditPost from "./Components/Posts/EditPost";
import FetchPost from "./Components/Posts/FetchPost";
import Home from "./Pages/Home";

const App = () => {
  return (
    <Fragment>
      <Router>
        <section>
          <header>
            <Navbar />
          </header>
          <ToastContainer />
          <main>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/create-post">
                <CreatePost />
              </Route>
              <Route path="/fetch-post" exact>
                <FetchPost />
              </Route>
              <Route path="/edit-post/:id" exact>
                <EditPost />
              </Route>
              <Route path="/delete-post/:id" exact>
                <DeletePost />
              </Route>
              <Route path="/details-post/:id" exact>
                <DetailsPost />
              </Route>
            </Switch>
          </main>
        </section>
      </Router>
    </Fragment>
  );
};

export default App;
