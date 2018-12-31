import React, {Component} from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CssBaseline } from '@material-ui/core'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import Typist from 'react-typist'
import avatarImg from '../../assets/avatar.png'

import Aux from '../../hoc/aux'
import { styles, themes } from './LayoutCSS'

class Layout extends Component {
    render() {
        const {classes} = this.props
        
        return (
            <Aux>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classes.layout}>
                        <div className={classes.header}>
                            <Toolbar variant="dense" className={classes.toolbarMain}>
                                <MuiThemeProvider theme={themes}>
                                    <Button className={classes.button} size="large">About Me</Button>
                                    <Button className={classes.button} size="large">My Works</Button>
                                    <Button className={classes.button} size="large">My Journey</Button>
                                </MuiThemeProvider>
                            </Toolbar>
                        </div>
                        <div className={classes.title}> 
                            <MuiThemeProvider theme={themes}>
                                <Typist cursor={{show: false}} avgTypingDelay={150}>
                                    <Typography variant="h1" gutterBottom>
                                        I'M TECK ONN.
                                    </Typography>  
                                </Typist>
                                <Grid container justify="center" alignItems="center">
                                    <Avatar alt="me" src={avatarImg} className={classes.avatar}/>
                                </Grid>
                                <Typist cursor={{show: false}} avgTypingDelay={80} startDelay={50}>
                                    <Typography variant="h6" gutterBottom>
                                        A FULL STACK WEB DEVELOPER
                                    </Typography>
                                </Typist>
                            </MuiThemeProvider>
                        </div>
                        <div className={classes.body}>
                            <main>
                                {this.props.children}
                            </main>
                        </div>
                    </div>
                </React.Fragment>
            </Aux>
        )
    }
}

export default withStyles(styles)(Layout)