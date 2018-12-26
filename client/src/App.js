import React, { Component } from 'react'
 
import classes from './App.css'
import Layout from './components/Layout/Layout'
import ContentBuilder from './components/ContentBuilder/ContentBuilder'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <ContentBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
