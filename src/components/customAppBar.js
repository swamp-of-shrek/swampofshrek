import React, {Component} from "react"
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import SimpleTabs from "./tabs";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import {Typography} from "@material-ui/core";

export default class SimpleAppBar extends Component {

    handleTabs = (tab) => {
        this.props.handleTabChange(tab)
    };

    handleTitle() {
        const {tab} = this.props;
        switch(tab) {
            case 0:
                return "Team Profile";
        }
    }

    render() {
        const {tab} = this.props;
        return (
            <AppBar position={"fixed"} style = {{background: 'transparent'}} elevation={0}>
                <Toolbar>
                    <Typography variant="h6" style={{color: 'white'}} >{this.handleTitle()}</Typography>
                </Toolbar>
            </AppBar>
        )
    }
}