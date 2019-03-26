import {createMuiTheme} from '@material-ui/core/styles';
import React from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import {CssBaseline} from "@material-ui/core";

const palette = {
    primary: {main: '#212121'},
    secondary: {main: '#AD1457'},
    background: {
        default: "#0000"
    }
};

const themeName = "Jazzberry";

const theme = createMuiTheme({palette, themeName});

function withRoot(Component) {
    function WithRoot(props) {
        return (
            <MuiThemeProvider theme={theme}>
                <CssBaseline/>
                <Component {...props}/>
            </MuiThemeProvider>
        )
    }

    return WithRoot;
}

export default withRoot;