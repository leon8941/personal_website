import React, { Component } from 'react'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography' 

import Typist from 'react-typist'

import { styles, themes } from './WorksCSS'
import Aux from '../../hoc/aux'
import Work from './Work/Work'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

// const {classes} = this.props

const GET_WORKS = gql`
    {
        works {
                id
                title
                description
                githubLink
                mediumLink
                skillSets {
                    id
                    techDescription
                    colorCode
            }
        }
    }
`

class Works extends Component { 
    render() {
        return (
            <Query query={GET_WORKS}>
                {({ loading, error, data }) => {
                    if (loading) return "Loading..."
                    if (error) return `Error! ${error.message}`
                    
                    return (
                        <Aux>
                            <React.Fragment>
                                <CssBaseline />
                                <div className={this.props.classes.body}>
                                    <div className={this.props.classes.introduction}>
                                        <MuiThemeProvider theme={themes}>
                                            <Typist cursor={{show: false}} avgTypingDelay={70}>
                                                <Typography variant="h4" gutterBottom>
                                                    THINGS I'VE BUILT
                                                </Typography>
                                            </Typist>
                                        </MuiThemeProvider>
                                    </div>
                                    <div className={data.works}>
                                        {
                                            data.works ? (
                                                <div className={this.props.classes.gridContainer}>
                                                    <Grid container spacing={24} style={{padding: 24}}>
                                                        {
                                                            data.works.map(project => (
                                                                <Grid key={project.id} item xs={12} sm={6} lg={4} xl={3}>
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
            </Query>
        )
    }
}

export default withStyles(styles)(Works)