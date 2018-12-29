import React, { Component } from 'react';

import Timeline from '../../Timeline/Timeline'
import TimelineItem from '../../Timeline/TimelineItem/TimelineItem'

import Aux from '../../../hoc/aux'

class CareerPaths extends Component {
    render() {
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
                                <h3>{exp.jobTitle}, {exp.companyName}</h3>
                                {
                                    exp.descriptions.map((desc, i) => (
                                        <p key={`desc_` + i}>{desc}</p>
                                    ))
                                }
                            </TimelineItem>
                        ))
                    }
                </Timeline>
            </Aux>
        )
    }
}


export default CareerPaths;