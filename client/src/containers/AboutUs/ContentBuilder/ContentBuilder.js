import React, { Component } from 'react'

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { styles, themes } from './ContentBuilderCSS' 
import CareerPaths from '../../../components/CareerPaths/CareerPaths'
import SkillSets from '../../../components/SkillSets/SkillSets'
import ContactMe from '../../../components/ContactMe/ContactMe'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const GET_SKILL_SETS = gql`
    {
        skillSets {
            id
            techDescription
            colorCode
        }
    }
  `

class ContentBuilder extends Component {
    state = {
    }

    render() {
        const {classes} = this.props

        return (
            <div className={classes.content}>
                <MuiThemeProvider theme={themes}>
                    <div className={classes.section}>
                        <Typography variant="h3" gutterBottom paragraph>Hi there</Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            I'm a Software Developer based in Kuala Lumpur, Malaysia. <br />
                        </Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            Full stack development is my passion, its give me a greater view of perspective 
                            when it comes to identify solution. <br /> 
                        </Typography>
                    </div>

                    <Divider variant="middle" />

                    <div className={classes.section}>
                        <Typography variant="h3" gutterBottom paragraph>A little bits about me</Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            Started out with Microsoft's ASP.NET web development stacks since 2014,
                            now I am fully diving into open source web technologies.  
                            Currently working at <a href="https://my.wobbjobs.com/" target="_blank" rel="noopener noreferrer">WOBB</a> as a Software Developer. <br /> 
                        </Typography><br /> 
                        <Typography variant="h6" gutterBottom paragraph>
                            Here are the few technologies I am experienced with:
                        </Typography>

                        <div className={classes.skillSets}>
                            <Query query={GET_SKILL_SETS}>
                                {
                                    ({ loading, error, data }) => {
                                        console.log('data content builder', data)
                                        
                                        if (loading) return "Loading..."
                                        if (error) return `Error! ${error.message}`
                                        return (
                                            <React.Fragment>
                                                <SkillSets
                                                        skillSets={data.skillSets}
                                                    >
                                                </SkillSets>
                                            </React.Fragment>
                                        )
                                    }
                                }
                            </Query>
                        </div>
                    </div>

                    <Divider variant="middle" />

                    <div className={classes.careerPaths}>
                        <Typography variant="h3" gutterBottom paragraph>My history</Typography>
                        <CareerPaths />
                    </div>

                    <Divider variant="middle" />

                    <div className={classes.section}>
                        <Typography variant="h3" gutterBottom>
                            Contact
                        </Typography>
                        <ContactMe />
                    </div>

                </MuiThemeProvider>
            </div>
        )        
    }
}

export default withStyles(styles)(ContentBuilder)