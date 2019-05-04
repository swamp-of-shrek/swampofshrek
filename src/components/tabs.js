import React, {Component} from "react";
import Tab from "@material-ui/core/es/Tab/Tab";
import Tabs from "@material-ui/core/Tabs";

export default class SimpleTabs extends Component {

    handleChange =(e, tab) => {
        this.props.handleTabsChange(tab);
    };

    render() {
        const {tab} = this.props;
        return (
            <Tabs textColor={"primary"} value={tab} onChange={this.handleChange}>
                <Tab label={"Personal Information"}/>
            </Tabs>
        )
    }
}