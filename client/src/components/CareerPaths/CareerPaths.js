import React, { Component } from 'react'

import Timeline from '../Timeline/Timeline'
import TimelineItem from '../Timeline/TimelineItem/TimelineItem'

import Aux from '../../hoc/aux' 
import { styles } from './CareerPathsCSS'
import { withStyles } from '@material-ui/core/styles'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

class CareerPaths extends Component {
    render() {
        const {classes} = this.props
        const GET_EXPERIENCES = gql`
            {
                experiences {
                    id
                    year
                    jobTitle
                    companyName
                    sorting
                    experienceDescriptions {
                      id
                      description
                      sorting
                    }
                  }
            }
        `

            return(
                <Query query={GET_EXPERIENCES}>
                    {({ loading, error, data }) => {
                        if (loading) return "Loading...";
                        if (error) return `Error! ${error.message}`;

                        return (
                            <Aux>
                                <Timeline lineColor={'#dcedc8'}>
                                    {
                                        data.experiences.map(exp => (
                                            <TimelineItem
                                                key={`timeline_item_` + exp.id}
                                                dateText={exp.year}
                                                style={{ color: '#8BC34A' }}
                                                dateInnerStyle={{ backgroundColor: '#dcedc8', color: '#8BC34A' }}
                                            >
                                                <h3>{exp.jobTitle} @ {exp.companyName}</h3>
                                                {
                                                    <ul>
                                                    { 
                                                        exp.experienceDescriptions.map((desc, i) => {
                                                            return (
                                                                <li className={classes.descriptionList} key={`desc_` + i}>{desc.description}</li>
                                                            )
                                                        }) 
                                                    }
                                                    </ul>
                                                }
                                            </TimelineItem>
                                        ))
                                    }
                                </Timeline>
                            </Aux>
                        )
                    }}
                </Query>
            )
    }
}


export default withStyles(styles)(CareerPaths)