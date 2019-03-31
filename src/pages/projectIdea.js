import React from "react";
import FloatingPaper from "../components/FloatingPaper";
import {Typography} from "@material-ui/core";

export default function ProjectIdea() {
    return (
        <FloatingPaper>
            <Typography color={"inherit"} variant={"h4"}>
                Project Ideas
            </Typography>
            <hr/>
            <Typography color={"inherit"} variant={"subtitle2"}>
                Overview
            </Typography>
            <Typography color={"inherit"} variant={"subtitle1"}>
                A portfolio website that features all the projects I have built and the current projects I am working on. The site will allow me to show demos of all my projects, each one having its own url or subdomain on the site, and each demo being having all the features built for its respective project. The site will also have a chat bot that acts as a digital guide for the site. The bot will show users how to use the site, answer questions about each project, and help users navigate the demos so they do not get lost.
            </Typography>
            <br/>
            <Typography color={"inherit"} variant={"subtitle2"}>
                Motivation
            </Typography>
            <Typography color={"inherit"} variant={"subtitle1"}>
                I want build this because I have an interest in web development and want to find a job as a web developer while I study. A portfolio site built from scratch will be evidence that I am capable of building web applications and deploying them. I am also doing this so I can get a better understanding of how javascript backend frameworks work and to gauge how much different it is to build in Node than it is in Django.

            </Typography>
            <br/>
            <Typography color={"inherit"} variant={"subtitle2"}>
                Description
            </Typography>
            <Typography color={"inherit"} variant={"subtitle1"}>
                The features intended are:
            </Typography>
            <ul>
                <li>
                    <Typography variant={"subtitle1"} color={"inherit"}>
                        Project Page <br/>
                        A simple page listing all of the projects I am working on. At the top of this page will be all the projects that are still in development or still need fixing. These pages at the top will not have demos.
                    </Typography>
                </li>
                <li>
                    <Typography variant={"subtitle1"} color={"inherit"}>
                        Demos Page <br/>
                        Users will be able to load full-featured demos of my projects, given that these projects are web apps of course. If they are not web applications then the user will receive a “how to run” guide that takes them through a step-by-step process detailing how the project can be run
                    </Typography>
                </li>
                <li>
                    <Typography variant={"subtitle1"} color={"inherit"}>
                        Chat Bot Guide <br/>
                        A bot that exists across all the pages on the site. This bot will give tips and advice on how to use the site, will navigate users through the projects and explain how to use each demo should the user be stumped or confused. The bot will also be able to answer questions about me such as: my age, my favourite colour, favourite food, goals, etc.

                    </Typography>
                </li>
            </ul>
            <br/>
            <Typography color={"inherit"} variant={"subtitle2"}>
                Tools and Technologies
            </Typography>
            <Typography color={"inherit"} variant={"subtitle1"}>
                For this project I am going to write the backend in <a href={"https://expressjs.com/"}>express</a>, a minimalist NodeJS  web framework. Express will be used to handle the RESTful API services for each project, processing each request accordingly.
            </Typography>
            <br/>
            <Typography color={"inherit"} variant={"subtitle1"}>
                In addition to express, <a href={"https://reactjs.org/"}>React</a>, a javascript frontend framework, will be used to render the UI elements in the project. I will also use <a href={"https://material-ui.com/"}>Material-UI</a> to style the page as this is a framework built to provide beautiful Material Design components for the developer.
            </Typography>
            <br/>
            <Typography variant={"subtitle1"} color={"inherit"}>
                Furthermore, <a href={"https://www.mongodb.com/"}>MongoDB</a> will be used as the chosen database. MongoDB is NoSQL database that integrates with javascript and accepts JSON objects as data. It will be used to store information about my projects hosted on github and other git services. It’ll also allow me to add phrases and sentences the bot can use.
            </Typography>
            <br/>
            <Typography color={"inherit"} variant={"subtitle2"}>
                Outcome
            </Typography>
            <Typography color={"inherit"} variant={"subtitle1"}>
                Should the project be successful, I will have a site detailing my skills and projects built as a software developer. It will also serve as a hub for my git projects which are scattered across multiple git sites. In the end, the project should make me more employable and hopefully will lead to me finding full time or part time employment as a software developer.
            </Typography>
            <br/>

        </FloatingPaper>
    )
}