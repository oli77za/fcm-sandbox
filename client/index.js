import { Meteor } from "meteor/meteor";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Popper from "popper.js";
import { $ } from "jquery";
import bootstrap from "bootstrap";

import { MainLayout } from "/imports/ui/layouts/main_layout";
import HomeContainer from "/imports/ui/containers/home";
import MobileHomeContainer from "/imports/ui/containers/mobile_home";
import "/imports/ui/scss/main.scss";

Meteor.startup(() => {
    render(
        (
            <BrowserRouter>
                <MainLayout>
                    <Route path="/" component={Meteor.isCordova ? MobileHomeContainer : HomeContainer} />
                </MainLayout>
            </BrowserRouter>)
        , document.getElementById("app"));
});

