import React from 'react'
import Chip from '@material-ui/core/Chip'

import { withStyles } from '@material-ui/core/styles'

import { styles } from './SkillSetsCSS'

const skillSets = (props) => {
    return (
        props.skillSets.map( (skillSet) => {
            return (
                <Chip  
                    key={"skill_chip_" + skillSet.id}
                    className={props.classes.chip}
                    label={skillSet.techDescription}
                    variant="outlined"
                    style={
                        {
                            backgroundColor: skillSet.colorCode,
                            color: 'white', //font color
                        }
                    }
                />
            )
        })
    )
}

export default withStyles(styles)(skillSets)