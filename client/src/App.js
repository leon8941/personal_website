import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
 
import Emoji from 'react-emoji-render'
import ReactSVG from 'react-svg'

import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import './App.css'
import Moments from './containers/Moments/Moments'
import Works from './containers/Works/Works'
import AboutUs from './containers/AboutUs/AboutUs'
 
import linkedinIcon from './assets/linkedin.svg'
import githubIcon from './assets/github.svg'
import instagramIcon from './assets/instagram.svg'

export const themes = createMuiTheme({
  palette: {
    primary: { main: '#a8ada3'},
  },
  typography: {
    useNextVariants: true,
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Inconsolata',
      'sans-serif'
    ].join(','),
    fontWeightMedium: 500,
    body1: {
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: 40,
    },
    button: {
      fontSize: '150'
    }, 
    h1: {
      color: '#8BC34A'
    },
    h2: {
      color: '#8BC34A'
    },
    h6: {
      color: '#8BC34A'
    }
  }, 
})



class App extends Component {
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
    
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Header">
            <Toolbar variant="dense" className="ToolbarMain"> 
              <MuiThemeProvider theme={themes}>
                <Button component={NavLink} to="/" color="primary" size="large">About</Button>
                <Button component={NavLink} to="/works" color="primary"  size="large">Works</Button>
                {/* <Button component={NavLink} to="/moments" color="primary"  size="large">Moments</Button> */}
              </MuiThemeProvider>
            </Toolbar>
          </div>
          <Switch>
              <Route path="/moments" exact component={Moments} />
              <Route path="/works" component={Works} />
              <Route path="/" component={AboutUs} />
          </Switch>
          <div className="footer">
              <Emoji text="@ 2019 Designed and developed with ❤️ by Teck Onn " >
              
              </Emoji>
              <div className="socialIcons">
                {
                  socialIcons.map((socialIcon, index) => {
                    return(
                      <ReactSVG 
                        key={`icon_${index}`} 
                        src={socialIcon.src} 
                        className="socialIcon"
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
      </BrowserRouter>
    );
  }
}

export default App;
