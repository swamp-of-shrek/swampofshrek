import React, {Fragment} from "react"
import FloatingPaper from "../components/FloatingPaper";
import {Typography} from "@material-ui/core";
import sheku_kanneh from '../static/sheku_kanneh.jpg';
import adam from '../static/adam.png'
import nandini from '../static/nandini.png'
import peng from '../static/peng.jpg'

export default function MyProfile() {
    return (
        <Fragment>
            <FloatingPaper>

                <div style={{display: 'flex'}}>
                    <img width={300} height={400} src={peng}/>
                    <div className={"facts"} style={{padding: 10}}>
                        <Typography variant={"h4"}>
                            <b>Peng Cheng Lin</b>
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            ID: s3664976
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Email Address: s3664976@student.rmit.edu.au
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Nationality: China
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Culture: Chinese Civilisation
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Education: Senior High School
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Languages: Chinese
                        </Typography>
                    </div>
                </div>



                <br/>
                <Typography variant={"h5"}>
                    DEFENDER PERSONALITY (ISFJ, -A/-T)
                </Typography>
                <Typography variant={"body1"}>
                    This personality type is a universal helper, sharing their knowledge,
                    experience, time and energy with anyone in need, especially with friends and family.
                    Also, they are meticulous, cautious, take a stable approach and make appropriate concessions
                    according to
                    the needs of the situation to achieve their ultimate goal.
                    Moreover, Defenders not only ensure that things are done to the highest standards but often far
                    beyond them.
                    Besides, defenders are very imaginative, they use this quality as an aid to empathy,
                    observe other people's emotional states and see things from their perspective.
                </Typography>
            </FloatingPaper>

            <FloatingPaper>

                <div style={{display: 'flex'}}>
                    <img width={300} height={400} src={nandini}/>
                    <div className={"facts"} style={{padding: 10}}>
                        <Typography variant={"h4"}>
                            <b>Nandini Nair</b>
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            ID: S3784955
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Email Address: s3784955@student.rmit.edu.au
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Nationality: Ethnically India, but actually from Singapore
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Education to date: RMIT University (Bach of IT)
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Languages Spoken: French, English, Hindi, Malayalam
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Passionate about: Digital art
                        </Typography>

                        <Typography variant={"subtitle2"}>
                            I used to run a blog from May 2017 until December 2018 and posted more than 500k words of
                            short stories there, and accumulated more than 13k people as a following.
                        </Typography>
                    </div>
                </div>

                <br/>
                <Typography variant={"h5"}>
                    LOGICIAN PERSONALITY (INTP)
                </Typography>
                <Typography variant={"body1"}>
                    INTPs are detached, analytical observers who can seem oblivious to the world around them
                    because they are so deeply absorbed in thought. They spend much of their time focused internally:
                    exploring concepts, making connections, and seeking understanding.
                    To the Architect, life is an ongoing inquiry into the mysteries of the universe.
                </Typography>
            </FloatingPaper>

            <FloatingPaper>

                <div style={{display: 'flex'}}>
                    <img width={600} height={400} src={adam}/>
                    <div className={"facts"} style={{padding: 10}}>
                        <Typography variant={"h4"}>
                            <b>Adam Burcher</b>
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            ID: s3769238
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Email Address: burchera@gmail.com
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Nationality: Australian
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Current Education: BA of Information Technology
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            League of Legends Match History: <a
                            href={"https://oce.op.gg/summoner/userName=Going%20for%20Silver"}>Here</a>
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Interesting Fact: Whilst writing this website,
                            I would be watching to or listening Hamilton The Musical for inspiration to do it well.
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            Honest Confession: I don't rightly know why I made a whole extra page for just this? It
                            seems like a
                            waste of time
                        </Typography>
                    </div>
                </div>


                <br/>
                <Typography variant={"h5"}>
                    INFJ
                </Typography>
                <Typography variant={"body1"}>
                    The Advocate personality type is very rare, making up less than one percent of the population, but
                    they nonetheless leave their mark on the world. Advocates have an inborn sense of idealism and
                    morality, but what sets them apart is that they are not idle dreamers, but people capable of taking
                    concrete steps to realize their goals and make a lasting positive impact. They tend to see helping
                    others as their purpose in life, but while people with this personality type can be found engaging
                    rescue efforts and doing charity work, their real passion is to get to the heart of the issue so
                    that people need not be rescued at all.
                </Typography>
            </FloatingPaper>

            <FloatingPaper>
                <Typography variant={"h4"}>
                    <b>Lai Mun Zhuo</b>
                </Typography>
                <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                    ID: s3685018
                </Typography>
                <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                    Email Address: s365018@student.rmi.edu.au
                </Typography>
                <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                    Nationality: Malaysian
                </Typography>
                <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                    Languages Spoken: Mandarin, Cantonese, English and a little bit of Malay
                </Typography>

                <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                    Education: Deakin College (Diploma of Engineering) RMIT (Bach of IT)
                </Typography>

                <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                    Fact: I AM ALWAYS HUNGRY
                </Typography>


                <br/>
                <Typography variant={"h5"}>
                    INFP
                </Typography>
                <Typography variant={"body1"}>
                    Mediator personalities are true idealists, always looking for the hint of good in even the worst of
                    people and events, searching for ways to make things better. While they may be perceived as calm,
                    reserved, or even shy, Mediators have an inner flame and passion that can truly shine. Comprising
                    just 4% of the population, the risk of feeling misunderstood is unfortunately high for the Mediator
                    personality type – but when they find like-minded people to spend their time with, the harmony they
                    feel will be a fountain of joy and inspiration.
                </Typography>
            </FloatingPaper>

            <FloatingPaper>
                <div style={{display: 'flex'}}>
                    <img width={300} height={400} src={sheku_kanneh}/>
                    <div className={"facts"} style={{padding: 10}}>
                        <Typography variant={"h4"}>
                            <b>Sao Sheku Kanneh</b>
                        </Typography>
                        <Typography variant={"subtitle1"} style={{marginTop: 10}}>
                            ID: s3788996
                        </Typography>

                        <Typography variant={"subtitle1"}>
                            Age: 18
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Email: s3788996@student.rmit.edu.au
                        </Typography>
                        <Typography variant={"subtitle1"}>
                            Nationality: Liberian
                        </Typography>

                        <Typography variant={"subtitle1"}>
                            DOB: 10/07/2000
                        </Typography>

                        <Typography variant={"subtitle1"}>
                            I Like: Pokemon, Super Smash, Lasagna, Kendrick Lamar
                        </Typography>
                    </div>
                </div>
                <br/>


                <Typography variant={"h5"}>
                    INFP-T
                </Typography>

                <Typography variant={"h5"}>
                    Mediator personalities are true idealists, always looking for the hint of good in even the worst of
                    people and events, searching for ways to make things better. While they may be perceived as calm,
                    reserved, or even shy, Mediators have an inner flame and passion that can truly shine. Comprising
                    just 4% of the population, the risk of feeling misunderstood is unfortunately high for the Mediator
                    personality type – but when they find like-minded people to spend their time with, the harmony they
                    feel will be a fountain of joy and inspiration.
                </Typography>
            </FloatingPaper>

            <FloatingPaper>
                <Typography variant={"h6"}>
                    Ideal Jobs
                </Typography>
                <Typography variant={"body"}>
                    Everyone’s ideal jobs are very similar in field, as well as interest. Adam and Sao are interested in
                    every type of programming, while Lai, Peng, and Nandini are leaning towards the development of video
                    games. However, some of us prefer to participate in teams, while others prefer to do solo careers;
                    either way, everyone is flexible, especially when it came to group work for an assignment.
                </Typography>
            </FloatingPaper>
            <FloatingPaper>
                <Typography variant={"h6"}>
                    Personalities
                </Typography>
                <Typography variant={"body"}>
                    It was fairly easy to communicate and give tasks to each person, since we all shared similar
                    personalities and could understand each other. Even though we are all introverts, communication is
                    our strong point. Since Peng is an ISFJ, he had gotten the task to conduct the interview; he was
                    able to easily understand the other person’s point of view, and summarize it all into words. The
                    leader of the group is the INTP, due to her logical thought process -- she was easily able to give
                    tasks to everyone and took initiative to discuss ideas. There were two people with the same
                    personalities within our group, but they are passionate about separate things: Sao is a decent
                    programmer, therefore he was given the task to design our group website, while Lai was given the
                    task to do research about industry data.

                </Typography>
            </FloatingPaper>
        </Fragment>
    )
}