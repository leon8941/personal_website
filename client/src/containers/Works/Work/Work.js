import React from 'react';

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography' 
import { withStyles } from '@material-ui/core/styles'

import { styles } from './WorkCSS'

import SkillSets from '../../../components/SkillSets/SkillSets'

const Work = (props) => {
    const { classes } = props

    return (
        <div className={classes.work}>
            <Card className={classes.card}>
                <CardHeader title={props.project.title} />
                <CardContent>
                    <Typography component="p">
                        {props.project.description}
                    </Typography>
                </CardContent>
                <div className={classes.bottom}>
                    <CardContent>
                        <SkillSets 
                            skillSets={props.project.skillSets}
                            />
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}

export default withStyles(styles)(Work)