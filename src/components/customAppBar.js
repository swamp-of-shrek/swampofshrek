import React, {Component} from "react"
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import SimpleTabs from "./tabs";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import {Typography} from "@material-ui/core";

export default class SimpleAppBar extends Component {

    handleTabs = (tab) => {
        this.props.handleTabChange(tab)
    };

    render() {
        return (
            <AppBar position={"static"} elevation={0}>
                <Toolbar>
                    <Typography variant="title" color={"secondary"}>Sao Sheku Kanneh</Typography>
                </Toolbar>
                <Toolbar style={{right: 0, position: 'absolute'}}>

                    <SimpleTabs handleTabsChange={this.handleTabs}/>
                </Toolbar>
            </AppBar>
        )
    }
}