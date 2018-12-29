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
                year: "Sept 2014 - Oct 2015",
                jobTitle: "Junior Software Developer",
                companyName: "MC Crenergy",
                descriptions: [
                    `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.`, 
                    `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.`
                ]
            }, 
            {
                key: "2",
                year: "Nov 2015 - Dec 2016",
                jobTitle: "Mid Level Software Developer",
                companyName: "MC Crenergy",
                descriptions: [
                    `Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.`
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
                            Full stack development is my passion, because one can have great overview of business sense 
                            and able to identify more accurate solutions to problems from different perspective. <br /> 
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