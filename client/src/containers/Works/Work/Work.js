import React from 'react';
import ReactSVG from 'react-svg'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography' 
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles'

import { styles } from './WorkCSS'

import SkillSets from '../../../components/SkillSets/SkillSets'

import githubIcon from './../../../assets/github.svg'
import mediumIcon from './../../../assets/medium.svg'

const cardHeader = (classes, props) => {
    const showIcon = (props.project.githubLink == null || props.project.githubLink === undefined || props.project.githubLink === "") ? false : true
    
    if(!showIcon) {
        return (
            <CardHeader 
                className={classes.cardHeader} 
                title={props.project.title} 
                />
        )
    }
    else {
        return (
            <Card elevation={0}>
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
            </Card>
        )
    }
}

const cardAction = (classes, props) => {
    const showIcon = (props.project.mediumLink == null || props.project.mediumLink === undefined || props.project.mediumLink === "") ? false : true

    if (showIcon) {
        return (
            <CardActions>
                <IconButton
                    className={classes.mediumIcon} 
                    onClick={()=>{
                            window.open(props.project.mediumLink)
                    }}>
                    <ReactSVG 
                        key={`icon_${props.project.key}`}   
                        src={mediumIcon} 
                        className="mediumIcon"  
                    />
                </IconButton>
            </CardActions>
        )
    }
}

const Work = (props) => {
    const { classes } = props

    return (
        <div className={classes.work}>
            <Card className={classes.card}>
                <div className={classes.cardHeader}>
                    { 
                        cardHeader(classes, props) 
                    }
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
                    {
                        cardAction(classes, props)
                    }
                </div>
            </Card>
        </div>
    )
}

export default withStyles(styles)(Work)