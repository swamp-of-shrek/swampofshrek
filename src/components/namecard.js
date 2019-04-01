import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import {Typography} from "@material-ui/core";
import ShekuTypography from "./shekuTypography";
import {makeStyles} from "@material-ui/styles";
import sheku_kanneh from '../static/sheku_kanneh.jpg'
import FloatingPaper from "./FloatingPaper";


const style = makeStyles({
    headshot: {
        width: 250,
        height: 280,
        padding: '1%',
        marginBottom: '5%'
    },

    contentMedia: {
        display: 'flex',
    },

    info: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '10%'
    },

    customTypoSize: {
        fontSize: '23px',
        marginBottom: '.9%'
    },

    social: {
        display: 'flex',
        background: '#212121',
        marginLeft: -40,
        marginRight: -40,
        marginBottom: -40,
        height: 50,
        width: 'calc(100% + 80px)'
    },

    profileDetails: {
        paddingTop: 10,
        paddingBottom: 10,
    },

    detailValue: {
        marginLeft: 80,
    },

    nameDiv: {}
});

export default function NameCard(props) {
    const classes = style();
    return <FloatingPaper>
        <div className={classes.contentMedia}>
            <CardMedia image={sheku_kanneh} className={classes.headshot}
                       title={"Sao Sheku Kanneh"}/>
            <div className={classes.info}>
                <div className={classes.nameDiv}>
                    <ShekuTypography name={"Sao Sheku Kanneh"}/>
                    <Typography variant={"h6"} color={"secondary"}>
                        Student
                    </Typography>
                    <hr width="100%"/>
                </div>
                <div style={{display: 'flex'}}>
                    <div style={{display: 'block'}}>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            <b>AGE</b>
                        </Typography>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            <b>ID</b>
                        </Typography>

                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            <b>E-MAIL</b>
                        </Typography>

                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            <b>NATIONALITY</b>
                        </Typography>

                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            <b>D.O.B</b>
                        </Typography>

                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            <b>I LIKE</b>
                        </Typography>
                    </div>

                    <div style={{display: 'block', marginLeft: '2%'}}>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            18
                        </Typography>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            3788996
                        </Typography>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            s3788996@student.rmit.edu.au
                        </Typography>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            Liberian
                        </Typography>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            10/07/2000
                        </Typography>
                        <Typography className={classes.customTypoSize} variant={"subtitle1"}>
                            Pokemon
                            <br/>
                            Skyrim
                            <br/>
                            Super Smash <br/>
                            Lasagna <br/>
                        </Typography>
                    </div>

                </div>

            </div>
        </div>
        <div className={classes.social}>

        </div>
    </FloatingPaper>
}