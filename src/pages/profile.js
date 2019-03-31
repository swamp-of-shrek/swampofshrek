import React from "react"
import FloatingPaper from "../components/FloatingPaper";
import {Typography} from "@material-ui/core";
import myerbriggs from "../static/myerbriggs.png";
import learnStyle from "../static/learnStyle.png";
import polComp from "../static/polComp.png";

export default function MyProfile() {
    return (
        <FloatingPaper>
            <Typography variant={"h4"}>
                Personal Profile
            </Typography>
            <hr/>

            <Typography variant={"h5"}>
                <b>Myers Briggs Test</b>
            </Typography>
            <img src={myerbriggs} width={700} height={500} alt={"Myers Briggs"}/>
            <br/>

            <Typography variant={"h5"}>
                <b>Learning Style Test</b>
            </Typography>
            <img src={learnStyle} width={700} height={500} alt={"Myers Briggs"}/>
            <br/>

            <Typography variant={"h5"}>
                <b>Learning Compass</b>
            </Typography>
            <img src={polComp} width={700} height={500} alt={"Myers Briggs"}/>
            <br/>
            <Typography variant={"subtitle1"}>
                The results of these tests do not mean much to me.
                Other than the Myers Briggs test, I see little value in these results,
                though it was interesting for me to read that I am an auditory learner and a left leaning Libertarian.
                I've always thought of myself as a Libertarian - I'm supportive of the rights of all people and
                believe our independence and individuality should not be legislated away by the government -
                but I always figured my ideologies were more right of centre than left.
                In regards to the learning style, I have nothing to say other than this is wrong.
                I know I learn better when I am practicing what is being taught rather than hearing it.
                This is a fact that I've told by my teachers in the past and I demonstrate when learning a new language,
                topic in maths, and even in writing.. I develop skills faster when I practice them.
                Also, regarding the Myers Briggs test - I don't think I am as emotional as it makes me seem.
                I spend time contemplating every decision before I make it (sometimes).
            </Typography>
            <br/>
            <Typography variant={"subtitle1"}>
                I believe me being introverted may prove difficult for teammates as I tend to become reclusive
                and fail to communicate effectively when put under immense social pressure. Despite this,
                I think if they Myers Briggs test is correct I'll have no trouble contributing ideas to the team that
                I think yield the highest probability for success.
                <em>If</em> the learning style result is correct, I'll have no trouble listening to my teammates and
                making decisions based on the things they've told me.
                As for the learning compass, I don't think political ideologies are important in group work.
                We should all be able to put aside our differences and work as a unit to produce the best possible
                results we can.
            </Typography>
            <br/>
            <Typography variant={"subtitle1"}>
                I think in choosing a team, I should find people who I know I can get along well with and I can
                be the most productive around. I don't believe the results of an online test should have any impact
                on a team's ability to succeed.
            </Typography>
        </FloatingPaper>
    )
}