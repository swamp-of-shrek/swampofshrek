import React, {Component, Fragment} from 'react';
import './App.css';
import SimpleAppBar from "./components/customAppBar";
import {withStyles} from "@material-ui/styles";
import NameCard from "./components/namecard";
import PropTypes from 'prop-types'
import ItInterestPage from "./pages/interest";
import FloatingPaper from "./components/FloatingPaper";
import IdealJob from "./pages/idealJob";
import ProjectIdea from "./pages/projectIdea";

const style = {
    card: {
        width: '52.7%',
        height: 'auto',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: "90px",
        marginBottom: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: '20',
        padding: 40,
    },

    bg1: {
        backgroundColor: '#212121',
        height: '50vh',
        width: '100%'
    },
}


class App extends Component {
    state = {
        tabs: 0
    };

    handleTabsChange = (tabs) => {
        this.setState({tabs})
    };

    render() {
        const {tabs} = this.state;
        const {classes} = this.props;
        return (
            <Fragment>
                <SimpleAppBar tab={tabs} handleTabChange={this.handleTabsChange}/>
                <div className={classes.bg1}>
                    <div className={classes.card}>
                        {tabs === 0 && <NameCard/>}
                        {tabs === 1 && <ItInterestPage/>}
                        {tabs === 2 && <IdealJob/>}
                        {tabs === 3 && <ProjectIdea/>}
                    </div>
                </div>
            </Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(style)(App);
