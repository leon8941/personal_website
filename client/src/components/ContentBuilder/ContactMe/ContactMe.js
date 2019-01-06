import React from 'react';

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

import { styles } from './ContactMeCSS'
import { Typography } from '../../../../node_modules/@material-ui/core';

const contactMe = (props) => (
	<div>
    <Typography variant="h6" gutterBottom paragraph>
        Have questions or want to work together or just want to say hi?
    </Typography>
		<Button
			href="mailto:leon8941@gmail.com?Subject=Hello%20again" target="_top" 
			variant="contained" 
			color="secondary" 
			className={props.classes.button}>
        Say Hello
        <Icon className={props.classes.rightIcon}>send</Icon>
    </Button>
	</div>
)

export default withStyles(styles)(contactMe)