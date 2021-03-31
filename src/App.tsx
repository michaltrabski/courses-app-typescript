import React from "react";
import MuiThemeProvider from "./muiTheme/muiThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import { CssBaseline } from "@material-ui/core";
import Wrapper from "./components/Wrapper";
import SingleCourse from "./components/SingleCourse";
import Header from "./components/Header";

function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />

      <Router>
        <Header />
        <Wrapper>
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/:id" component={SingleCourse} />
          </Switch>
        </Wrapper>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
