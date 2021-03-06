import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import injectContext from "./store/projectContext";
import ScrollToTop from "./components/scrollToTop";

import Home from "../js/views/home";
import Navbar from "../js/components/navbar";
import Apis from "../js/views/apis";
import Hooks from "../js/views/hooks";

const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div className="d-flex flex-column">
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/apis">
                            <Apis />
                        </Route>
                        <Route exact path="/hooks">
                            <Hooks />
                        </Route>

                        <Route>
                            <h1>Not found!</h1>
                        </Route>
                    </Switch>
                    {/* <Footer /> */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);