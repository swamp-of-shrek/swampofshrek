import React, {Fragment} from "react"
import NameCard from "../components/namecard";
import {makeStyles} from "@material-ui/styles";

const style  = makeStyles({
    bg1: {
        backgroundColor: '#212121',
        height: '30vh',
        width: '100%'
    },
    bg2: {
        height: '54.3vh',
        width: '100%',
        backgroundColor: '#ad1457'
    }
})

export default function MyInfo(props) {
    const classes = style();
    console.log(classes);
    return(
        <Fragment>
            <div className={classes.bg1}>
                <NameCard/>
            </div>
            <div className={classes.bg2}></div>

        </Fragment>
    )

}