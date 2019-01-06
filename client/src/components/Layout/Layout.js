import React, {Component} from 'react'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CssBaseline } from '@material-ui/core'
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

import Typist from 'react-typist'
import Emoji from 'react-emoji-render'
import ReactSVG from 'react-svg'
 
import Aux from '../../hoc/aux'
import { styles, themes } from './LayoutCSS'
import avatarImg from '../../assets/avatar.png'
import linkedinIcon from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'

class Layout extends Component {
    render() {
        const socialIcons = [
            {
              src: linkedinIcon,
              link: 'https://www.linkedin.com/in/teckonn'
            }, 
            {
              src: githubIcon,
              link: 'https://github.com/leon8941'
            }, 
            {
              src: instagramIcon,
              link: 'https://www.instagram.com/dvlpr.miew'
            }, 
        ]

        const {classes} = this.props
        
        return (
            <Aux>
                <React.Fragment>
                    <CssBaseline />
                    <div className={classes.layout}>
                        <div className={classes.header}>
                            <Toolbar variant="dense" className={classes.toolbarMain}>
                                <MuiThemeProvider theme={themes}>
                                    <Button href="/" className={classes.button} size="large">About</Button>
                                    <Button href="/works" className={classes.button} size="large">Works</Button>
                                    <Button href="/moments" className={classes.button} size="large">Moments</Button>
                                </MuiThemeProvider>
                            </Toolbar>
                        </div>
                        <div className={classes.title}> 
                            <MuiThemeProvider theme={themes}>
                                <Typist cursor={{show: false}} avgTypingDelay={150}>
                                    <Typography variant="h2" gutterBottom>
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
                        <div className={classes.footer}>
                            <Emoji text="@ 2019 Designed and developed with ❤️ by Teck Onn " >
                            
                            </Emoji>
                            <div className={classes.socialIcons}>
                              {
                                socialIcons.map((socialIcon, index) => {
                                  return(
                                    <ReactSVG 
                                      key={`icon_${index}`} 
                                      src={socialIcon.src} 
                                      className={classes.socialIcon} 
                                      onClick={()=>{
                                        window.open(socialIcon.link)
                                      }}
                                      />
                                  )
                                })
                              }
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </Aux>
        )
    }
}

export default withStyles(styles)(Layout)