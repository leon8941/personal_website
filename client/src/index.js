import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import ApolloClient from 'apollo-boost'
import gql from "graphql-tag";
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'))

const client = new ApolloClient({
    uri: process.env.REACT_APP_SERVER_BASE_URI + '/graphql'
});

client
    .query({
        query: gql`
            {
                experiences {
                    year
                    jobTitle
                    companyName
                    sorting
                    experienceDescriptions {
                      id
                      sorting
                    }
                  }
            }
        `
    })
    .then(response => {
        console.log(response)
    })

    

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
