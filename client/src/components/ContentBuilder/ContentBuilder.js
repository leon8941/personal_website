import React, { Component } from 'react'

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { styles, themes } from './ContentBuilderCSS' 
import CareerPaths from './CareerPaths/CareerPaths'

class ContentBuilder extends Component {
    state = {
        experiences: [
            {
                key: "1",
                year: "Aug 2018 - Present",
                jobTitle: "Software Developer",
                companyName: "WOBB",
                descriptions: [ // Each item in this array represent different paragraph
                    `
                        Work with a team of awesome peeps in a fast-paced and extremely dynamic startup company
                    `,
                    `
                        Maintain and develop features of WOBB's job search web application 
                        using variety of different technologies for different stacks and platforms, such as
                        Ruby on Rails, Javascript (ES6), React.js, SQL, and React Native
                    `,
                    `
                        Successfully built, shipped, and migrated new chat system using Sendbird
                    `,
                    `
                        Work closely with sales operation and marketing team to perform ELT (Extract Load Transform) 
                        for analysis purposes with the intention of making better business decision
                    `
                ]
            }, 
            {
                key: "2",
                year: "Mar 2017 - Jul 2018",
                jobTitle: "Tech Team Leader",
                companyName: "MC Crenergy",
                descriptions: [
                    `
                        Plan, verify, and execute on every stages of software developments's lifecycle
                    `,
                    `
                        Provide supervision, on job training, and technical guidance to fresh grads / junior developer
                    `,
                    `
                        Communicate with various department's manager / leader to manage expectations in daily scrum meetings
                    `

                ]
            },
            {
                key: "3",
                year: "Sep 2014 - Feb 2017",
                jobTitle: "Software Developer",
                companyName: "MC Crenergy",
                descriptions: [
                    `
                        Develop and maintain enterprise web applications for large corporation, using mainly Microsoft technologies s
                        such as ASP.NET MVC, C# & VB, MS SQL, Reporting Services, Analysis Services and Integration Services for ETL.
                    `,
                    `
                        Built and engineered 3 business apps (Cordova and Ionic), which are employee's claim management apps, 
                        purchase requisition apps and distributor's merchandising apps.

                    `,
                    `
                        Work with project teams and clients on capturing business requirement, 
                        estimate effort, brainstorming session, negotiate project timeline, risk-management, backup plan.
                    `
                ]
            }
        ]
    }

    render() {
        const {classes} = this.props

        return (
            <div className={classes.content}>
                <MuiThemeProvider theme={themes}>
                    <div className={classes.section}>
                        <Typography variant="h3" gutterBottom paragraph>Hi there</Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            I'm a Full Stack Web Developer based in Kuala Lumpur, Malaysia. <br />
                        </Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            Full stack development is my passion, because one can have great overview and perspective of business sense 
                            and able to identify better solution to deliver robust work. <br /> 
                        </Typography>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.section}>
                        <Typography variant="h3" gutterBottom paragraph>A bit about my experiences</Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            Started out with Microsoft's ASP.NET web development stacks since 2014,
                            now I am fully diving into open source web technologies
                            while embracing the power of open source's community to the fullest. <br /> 
                        </Typography><br /> 
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.careerPaths}>
                        <CareerPaths 
                            experiences={this.state.experiences}
                            />
                    </div>
                </MuiThemeProvider>
            </div>
        )        
    }
}

export default withStyles(styles)(ContentBuilder)