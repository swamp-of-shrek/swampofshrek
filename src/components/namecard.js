import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import {CardContent, IconButton, Paper, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ShekuTypography from "./shekuTypography";
import {makeStyles} from "@material-ui/styles";
import sheku_kanneh from '../static/sheku_kanneh.jpg'


const style = makeStyles({
    card: {
        width: '100%',
        height: '650px',
        borderRadius: 0,
        zIndex: '20',
        padding: 40,
    },
    headshot: {
        width: 700,
        height: 420,
        padding: 40,
        border: '40px white solid'
    },

    contentMedia: {
        display: 'flex',
        padding: 20
    },

    info: {
        paddingLeft: 10,
        display: 'block',
    },

    customTypoSize: {
        fontSize: '23px',
        marginBottom: 25
    },

    social: {
        display: 'flex',
        background: '#212121',
        position: 'absolute',
        height: 50,
        width: '100%'
    },

    profileDetails: {
        paddingTop: 10,
        paddingBottom: 10,
    },

    detailValue: {
        marginLeft: 80,
    }
});

export default function NameCard(props) {
    const classes = style();
    return <Paper className={classes.card}>
        <div className={classes.contentMedia}>
            <CardMedia image={sheku_kanneh} className={classes.headshot}
                       title={"Sao Sheku Kanneh"}/>
            <CardContent>
                <Grid container className={classes.info}>
                    <Grid style={{width: '89%'}} item>
                        <ShekuTypography name={"Sao Sheku Kanneh"}/>
                        <Typography variant={"h6"} color={"secondary"}>
                            Student
                        </Typography>
                        <hr/>
                    </Grid>
                    <Grid className={classes.profileDetails} style={{width: '89%'}} item container>
                        <Grid container item xs={12}>
                            <Grid item xs={2}>
                                <Typography className={classes.customTypoSize}>
                                    <b>AGE</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.detailValue}>
                                <Typography className={classes.customTypoSize}>18</Typography>
                            </Grid>
                            <Grid/>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={2}>
                                <Typography className={classes.customTypoSize}>
                                    <b>ID</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.detailValue}>
                                <Typography className={classes.customTypoSize}>3788996</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            <Grid item xs={2}>
                                <Typography className={classes.customTypoSize}>
                                    <b>E-MAIL</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.detailValue}>
                                <Typography className={classes.customTypoSize}>s3788996@student.rmit.edu.au</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={16}>
                            <Grid item xs={2}>
                                <Typography className={classes.customTypoSize}>
                                    <b>NATIONALITY</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.detailValue}>
                                <Typography className={classes.customTypoSize}>Liberian</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={16}>
                            <Grid item xs={2}>
                                <Typography className={classes.customTypoSize}>
                                    <b>D.O.B</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.detailValue}>
                                <Typography className={classes.customTypoSize}>10/07/2000</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12} spacing={16}>
                            <Grid item xs={2}>
                                <Typography className={classes.customTypoSize}>
                                    <b>I LIKE</b>
                                </Typography>
                            </Grid>
                            <Grid item xs={2} className={classes.detailValue}>
                                <Typography className={classes.customTypoSize}> Lasagna Pokemon Skyrim
                                    Purple</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </div>
    </Paper>
}