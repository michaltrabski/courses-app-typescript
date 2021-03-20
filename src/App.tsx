import React from "react";
import MuiThemeProvider from "./muiTheme/muiThemeProvider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoursesList from "./components/CoursesList";
import { CssBaseline } from "@material-ui/core";
import ContainerMy from "./components/ContainerMy";
import Course from "./components/Course";

function App() {
  return (
    <MuiThemeProvider>
      <CssBaseline />
      <ContainerMy>
        <>
          <Router>
            <Switch>
              <Route exact path="/" component={CoursesList} />
              <Route path="/:id" component={Course} />
            </Switch>
          </Router>
        </>
      </ContainerMy>
    </MuiThemeProvider>
  );
}

export default App;
