import React from "react";
import {makeStyles} from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";

const style = makeStyles(theme => ({
    card: {
        width: '100%',
        height: 'auto',
        marginBottom: 20,
        marginTop: 20,
        zIndex: '20',
        padding: 70,
        textAlign: "justify",
    },
}));

export default function FloatingPaper(props) {
    const classes = style();
    const {alter} = props;
    const backgroundColor = !alter ? '#fff' : '#212121';
    return (
        <Paper style={{background: backgroundColor, color: (!alter ? "#212121" : "#fff")}} className={classes.card}>
            {props.children}
        </Paper>
    )
}