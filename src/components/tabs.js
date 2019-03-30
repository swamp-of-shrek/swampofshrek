import React, {Component} from "react";
import Tab from "@material-ui/core/es/Tab/Tab";
import Tabs from "@material-ui/core/Tabs";

export default class SimpleTabs extends Component {
    state = {
        currentTab: 0
    };

    handleChange =(e, tab) => {
      this.setState({currentTab: tab});
        this.props.handleTabsChange(tab);
    };

    render() {
        const {currentTab} = this.state;
        return (
            <Tabs value={currentTab} onChange={this.handleChange}>
                <Tab label={"My Profile"}/>
                <Tab label={"Interest In IT"}/>
                <Tab label={"Ideal Job"}/>
            </Tabs>
        )
    }
}