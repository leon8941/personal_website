import React, { Component } from 'react'

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import { styles, themes } from './ContentBuilderCSS' 

class ContentBuilder extends Component {
    render() {
        const {classes} = this.props

        return (
            <div className={classes.content}>
                <MuiThemeProvider theme={themes}>
                    <div className={classes.section}>
                        <Typography variant="h3" gutterBottom paragraph>Hi there</Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            I'm a Full Stack Web Developer based in Kuala Lumpuer, Malaysia. <br />
                        </Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            Full stack development is my passion, because one can have great overview of business sense 
                            and able to identify more accurate solutions to problems from different perspective. <br /> 
                        </Typography>
                    </div>
                    <Divider variant="middle" />
                    <div className={classes.section}>
                        <Typography variant="h3" gutterBottom paragraph>A bit about my experiences</Typography>
                        <Typography variant="h6" gutterBottom paragraph>
                            Started out with Microsoft's ASP.NET web development stacks since 2014,
                            now I am fully diving into open source web technologies
                            while embracing the power of open source's community to the fullest. <br /> 

                            Check out my <a href="/">work</a> to see what I am up to!
                        </Typography>
                    </div>
                </MuiThemeProvider>
            </div>
        )        
    }
}

export default withStyles(styles)(ContentBuilder)