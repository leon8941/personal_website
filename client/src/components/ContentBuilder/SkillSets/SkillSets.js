import React from 'react';
import Chip from '@material-ui/core/Chip';

import { withStyles } from '@material-ui/core/styles'

import { styles } from './SkillSetsCSS'

const skillSets = (props) => (
    props.skillSets.map( (skillSet, i) => {
        return (
            <Chip  
                key={"skill_chip_" + i}
                className={props.classes.chip}
                label={skillSet.tech}
                variant="outlined"
                style={
                    {
                        backgroundColor: skillSet.color,
                        color: 'white', //font color
                    }
                }
            />
        )
    })
)

export default withStyles(styles)(skillSets)