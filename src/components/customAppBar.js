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
                return "Personal";
            case 1:
                return "Interest In IT";
            case 2:
                return "Ideal Job";
            default:
                return "You should not be seeing this";
        }
    }

    render() {
        const {tab} = this.props;
        return (
            <AppBar position={"fixed"} elevation={0}>
                <Toolbar>
                    <Typography variant="h6" color={"secondary"}>{this.handleTitle()}</Typography>
                </Toolbar>
                <Toolbar style={{right: 0, position: 'absolute'}}>

                    <SimpleTabs tab={tab} handleTabsChange={this.handleTabs}/>
                </Toolbar>
            </AppBar>
        )
    }
}