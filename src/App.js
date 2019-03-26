import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import withRoot from "./theme";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";



class App extends Component {
  render() {
      return (
          <MuiThemeProvider theme={""}>
              <Fragment>
                  <Grid>

                  </Grid>
              </Fragment>
          </MuiThemeProvider>
      );
  }
}

export default withRoot(App);
