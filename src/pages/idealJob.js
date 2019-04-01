import React from "react"
import FloatingPaper from "../components/FloatingPaper";
import {Typography} from "@material-ui/core";
import ideal_job from "../static/ideal_job.png";


export default function IdealJob() {
    return(
        <FloatingPaper>
            <Typography variant={"h4"} color={"inherit"}>
                Ideal Job
            </Typography>
            <hr/>
            <div>
               <img alt={"Ideal Job"} width={500} height={600} src={ideal_job} />
            </div>

            <hr/>

            <Typography variant={"subtitle1"} color={"inherit"}>
                The position is for a Backend Developer who will be responsible for building, debugging and testing the official 61 Financial website. The position interests me a lot as this is
                something I am familiar with, as most of my personal
                projects are backend projects with a RESTful API to connect to any frontend.
            </Typography>
            <br/>
            <Typography variant={"subtitle1"} color={"inherit"}>
                The job requires knowledge of the Python, PHP, and Javascript programming languages, and additionally, the web frameworks that are built in these languages (i.e. Django & Laravel). In addition, experience with database technologies is a requirement. Furthermore, the job has an expectation that the user knows how to deploy to AWS and has knowledge on how to optimise server-side performance with Memcache & Redis.
            </Typography>
            <br/>
            <Typography variant={"subtitle1"} color={"inherit"}>
                I have a lot of experience in Python web development, with the majority of my projects built using Django which is a Python web framework. I’ve built minor projects in javascript and PHP as well, but I am not as experienced with these in comparison to Python. I have written multiple projects that used PostgreSQL as the database tech, and only one using MongoDB.
            </Typography>
            <br/>
            <Typography variant={"subtitle1"} color={"inherit"}>
                My plan to obtain the skills necessary is to continue building more useless projects, using each one to focus on a specific skill or tool I don’t properly understand. I want to build a portfolio site and deploy it to AWS, learning how to use and deploy to the platform in the process. I will also be taking the Web Development unit at RMIT to learn web development in a more traditional and professional manner in order to hopefully identify any bad habits and kill them swiftly.
            </Typography>
        </FloatingPaper>
    )
}