import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";
import {unstable_Box as Box} from "@material-ui/core/Box";

const ShekuTypography = (props) => {
    const name = props.name;
    return (
        <Fragment>
            <Typography style={{display: 'inline'}}  variant={"h3"}>
                I'm&nbsp;
            </Typography>
        <Typography style={{display: 'inline'}} color={"textPrimary"} variant={"h3"}>
             <b>{name}</b>
        </Typography>
        </Fragment>
    )
};

export default ShekuTypography