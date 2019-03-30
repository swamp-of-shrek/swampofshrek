import React, {Component, Fragment} from 'react';
import './App.css';
import withRoot from "./theme";
import SimpleAppBar from "./components/customAppBar";
import Typography from "@material-ui/core/Typography";
import MyInfo from "./pages/myInfo";


class App extends Component {
    state = {
        tabs: 0
    };

    handleTabsChange = (tabs) => {
        this.setState({tabs})
    };

    render() {
        const {tabs} = this.state;
        return (
            <Fragment>
                <SimpleAppBar handleTabChange={this.handleTabsChange}/>
                <div style ={{marginTop: '90px'}}>
                    {tabs === 0 && <MyInfo/>}
                    {tabs === 1 && <Typography>Interest in IT</Typography>}
                    {tabs === 2 && <Typography>Ideal Job</Typography>}
                </div>
            </Fragment>
        );
    }
}

export default withRoot(App);
