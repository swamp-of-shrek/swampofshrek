import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";


const ShekuTypography = (props) => {
    const name = props.name;
    return (
        <Fragment>
            <Typography style={{display: 'inline', textAlign: 'justify'}} color={"textPrimary"} variant={"h3"}>
                I'm {name}
            </Typography>
        </Fragment>
    )
};

export default ShekuTypography