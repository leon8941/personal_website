import React, { Component } from 'react'

import Timeline from '../Timeline/Timeline'
import TimelineItem from '../Timeline/TimelineItem/TimelineItem'

import Aux from '../../hoc/aux' 
import { styles } from './CareerPathsCSS'
import { withStyles } from '@material-ui/core/styles'

class CareerPaths extends Component {
    render() {
        const {classes} = this.props

        return(
            <Aux>
                
                <Timeline lineColor={'#dcedc8'}>
                    {
                        this.props.experiences.map(exp => (
                            <TimelineItem
                                key={`timeline_item_` + exp.key}
                                dateText={exp.year}
                                style={{ color: '#8BC34A' }}
                                dateInnerStyle={{ backgroundColor: '#dcedc8', color: '#8BC34A' }}
                            >
                                <h3>{exp.jobTitle} @ {exp.companyName}</h3>
                                {
                                    <ul>
                                    { 
                                        exp.descriptions.map((desc, i) => {
                                            return (
                                                <li className={classes.descriptionList} key={`desc_` + i}>{desc}</li>
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
    }
}


export default withStyles(styles)(CareerPaths)