import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";


const ShekuTypography = (props) => {
    const name = props.name;
    return (
        <Fragment>
            <Typography style={{display: 'inline'}} color={"primary"} variant={"h3"}>
                I'm&nbsp;
            </Typography>
            <Typography style={{display: 'inline'}} color={"textPrimary"} variant={"h3"}>
                {name}
            </Typography>
        </Fragment>
    )
};

export default ShekuTypography