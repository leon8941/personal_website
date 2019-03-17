import React from 'react'
import Chip from '@material-ui/core/Chip'

import { withStyles } from '@material-ui/core/styles'

import { styles } from './SkillSetsCSS'

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

const skillSets = (props) => (
    <Query query={GET_SKILL_SETS}>
        {({ loading, error, data }) => {
            if (loading) return "Loading...";
            if (error) return `Error! ${error.message}`;

            return (
                data.skillSets.map( (skillSet) => {
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
        }}
    </Query>
)

export default withStyles(styles)(skillSets)