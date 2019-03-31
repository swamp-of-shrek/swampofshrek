import React, {Fragment} from "react"
import NameCard from "../components/namecard";
import {makeStyles} from "@material-ui/styles";

const style  = makeStyles({

    bg2: {
        height: '54.3vh',
        width: '100%',
        backgroundColor: '#ad1457'
    }
});

export default function MyInfo(props) {
    const classes = style();
    console.log(classes);
    return(
        <Fragment>
            <div className={classes.bg1}>
                <NameCard/>
            </div>

        </Fragment>
    )

}