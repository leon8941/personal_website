import React, {Component} from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import { CssBaseline, Avatar } from '@material-ui/core';

import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'

import avatarImg from '../../assets/avatar.jpg'

import Aux from '../../hoc/aux'
import { styles, themes } from './LayoutCSS';

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
                                    <Avatar className={classes.avatar} src={avatarImg}/>
                                    <Button className={classes.button} size="large">About Me</Button>
                                    <Button className={classes.button} size="large">My Works</Button>
                                    <Button className={classes.button} size="large">My Blogs</Button>
                                </MuiThemeProvider>
                            </Toolbar>
                        </div>
                        <div className={classes.title}> 
                            <MuiThemeProvider theme={themes}>
                                <Typography component="h1" variant="h1" gutterBottom>
                                    I'M LEON.
                                </Typography>  
                                <Typography variant="h6" gutterBottom>
                                    A SOFTWARE DEVELOPER
                                </Typography>
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