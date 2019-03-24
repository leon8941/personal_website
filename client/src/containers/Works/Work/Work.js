import React from 'react';
import ReactSVG from 'react-svg'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography' 
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles'

import { styles } from './WorkCSS'

import SkillSets from '../../../components/SkillSets/SkillSets'

import githubIcon from './../../../assets/github.svg'

const Work = (props) => {
    const { classes } = props

    return (
        <div className={classes.work}>
            <Card className={classes.card}>
                <div className={classes.cardHeader}>
                    <CardHeader 
                        className={classes.cardHeader} 
                        title={props.project.title} 
                        action={
                            <IconButton 
                                className={classes.githubIcon} 
                                onClick={()=>{
                                        window.open(props.project.githubLink)
                                }}>
                                <ReactSVG 
                                    key={`icon_${props.project.key}`}   
                                    src={githubIcon} 
                                    className="githubIcon"  
                                    
                                />
                            </IconButton>
                        }
                        />
                    
                </div>
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