import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
 
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import './App.css'
import Moments from './containers/Moments/Moments'
import Works from './containers/Works/Works'
import AboutUs from './containers/AboutUs/AboutUs'

export const themes = createMuiTheme({
  typography: {
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
    return (
      <BrowserRouter>
        <div className="App">
          <div className="Header">
            <Toolbar variant="dense" className="ToolbarMain"> 
              <MuiThemeProvider theme={themes}>
                <Button component={NavLink} to="/" className="HeaderButtons" size="large">About</Button>
                <Button component={NavLink} to="/works" className="HeaderButtons" size="large">Works</Button>
                <Button component={NavLink} to="/moments" className="HeaderButtons" size="large">Moments</Button>
              </MuiThemeProvider>
            </Toolbar>
          </div>
          <Switch>
              <Route path="/moments" exact component={Moments} />
              <Route path="/works" component={Works} />
              <Route path="/" component={AboutUs} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
