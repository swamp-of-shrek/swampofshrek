import React, {Fragment} from 'react';
import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import FloatingPaper from "../components/FloatingPaper";

const style  = makeStyles({
    bg1: {
        backgroundColor: '#212121',
        height: '40vh',
        width: '100%',
        flex: '0 1 auto',
    },

    typoSize: {
        color: 'white'
    }
});

export default function ItInterestPage(props) {
    return(
        <Fragment>
            <FloatingPaper >
                <Typography variant={"h4"} color={"inherit"}>
                    Interest in IT
                </Typography>
                <hr/>
                <Typography variant={"subtitle1"} color={"inherit"}>
                    My interest in IT lies heavily in web development.
                    I first became interested in IT as a child in primary school.
                    In my primary school in Tasmania we had very few computers and as such a limited amount time in which we could use the computer.
                    Whenever we got a chance to “surf the web” (as it was called back then)
                    I would stare endlessly, fascinated by these beautiful and complex pages.
                    I always wondered how the pages work, who made them and how this person came to learn how to build such sites.
                    However my interest didn’t fully develop until the age of 12 when I first got a
                    stable internet connection at home and started using the web to learn how to develop… for the web! My experience in IT is very limited. I know how to write software and develop backend services and I’m adequate at SysAdmin stuff. Despite this, I still feel that there is a lot I don’t know about IT and I say it's a testament to my lack of knowledge that I am even unable to name these things right now. I also have school-related experience, having taken computing and software development subjects in VCE.
                </Typography>
                <br/>
                <Typography variant={"subtitle1"} color={"inherit"}>
                    I chose RMIT because I believe that this university is one of the best universities for studying technology related courses.
                    I aspire to be a great software developer one day and I believe that in order for this to happen I need to have received the best education I can get for this booming industry.
                    Also, RMIT being in the city means I don’t have to endure a long journey to and from class every day.
                    I also have friends who attend RMIT and, being slightly socially awkward, I knew I’d feel more comfortable here than anywhere else.
                </Typography>
                <br/>
                <Typography variant={"subtitle1"} color={"inherit"}>
                    I expect to learn how to build projects in a professional environment,
                    and to gain invaluable coordination skills through group projects and assignments at uni. I expect to unlearn all my bad habits as a developer to gain new good ones as well.
                    I expect, most of all, to be highly employable.
                </Typography>
            </FloatingPaper>
        </Fragment>
    )
}