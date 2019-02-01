import React, { Component } from 'react'

import { CssBaseline } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography' 

import Typist from 'react-typist'

import { styles } from './WorksCSS'
import Aux from '../../hoc/aux'
import Work from './Work/Work'

class Works extends Component {
    state = {
        projects: [
            {
                key: "1", 
                title: "Personal Website",
                description: "First version of my website, built with ReactJS and Rails as backend. API calls using GraphQL and hosted using Heroku.",
                githubLink: "https://github.com/leon8941/personal_website",
                skillSets: [
                    {
                        tech: 'Ruby on Rails',
                        color: '#CA2014'
                    },
                    {
                        tech: 'GraphQL',
                        color: '#E10098'
                    },
                    {
                        tech: 'React.js',
                        color: '#67DAF9'
                    },
                    {
                        tech: 'Javascript',
                        color: '#EFDA5B'
                    }
                ]
            },
            {
                key: "2", 
                title: "Flutter Chat Apps",
                description: "First try with chat apps built with Flutter. Support by Firebase backend.",
                githubLink: "https://github.com/leon8941/merchandising-flutter",
                skillSets: [
                    {
                        tech: 'Flutter',
                        color: '#5AC6F6'
                    },
                    {
                        tech: 'Firebase',
                        color: '#FFCA28'
                    }
                ]
            },
            {
                key: "3", 
                title: "Burger Project",
                description: "A burger builder web apps that burger lovers can choose whatever ingredients they like. Built with ReactJS, backend support by Rails. Currently use Firebase to persist data but will migrate to Postgres in future.",
                githubLink: "https://github.com/leon8941/list-of-ingredients",
                skillSets: [
                    {
                        tech: 'React.js',
                        color: '#67DAF9'
                    },
                    {
                        tech: 'Firebase',
                        color: '#FFCA28'
                    }
                ]
            }
        ]
    }

    render() {
        const {classes} = this.props

        return(
            <Aux>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classes.body}>
                        <div className={classes.introduction}>
                            <Typist cursor={{show: false}} avgTypingDelay={70}>
                                <Typography variant="h5" gutterBottom>
                                    HERE ARE SOME THINGS I'VE BUILT
                                </Typography>
                            </Typist>
                        </div>
                        <div className={classes.works}>
                            {
                                this.state.projects ? (
                                    <div className={classes.gridContainer}>
                                        <Grid container spacing={24} style={{padding: 24}}>
                                            {
                                                this.state.projects.map(project => (
                                                    <Grid key={project.key} item xs={12} sm={6} lg={4} xl={3}>
                                                        <Work
                                                            project={project} 
                                                            />
                                                    </Grid>
                                                ))
                                            }
                                        </Grid>
                                    </div>
                                ) : "There is no works available!"
                            }
                        </div>
                    </div>
                </React.Fragment>
            </Aux>
        )
    }
}

export default withStyles(styles)(Works)