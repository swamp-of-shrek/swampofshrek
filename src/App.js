import React, {Component, Fragment} from 'react';
import './App.css';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import withRoot from "./theme";
import Paper from "@material-ui/core/Paper";
import NameCard from "./components/namecard";

const style = ({

})


class App extends Component {
  render() {
      console.log(this.props);
      return (
              <Fragment>
                     <NameCard theme={this.props.theme} />
              </Fragment>
      );
  }
}

export default withRoot(App);
