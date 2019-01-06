import { createMuiTheme } from '@material-ui/core/styles'

export const styles = theme => ({
    layout: {
        width: 'auto',
        marginTop: '0'
    },
    header: {
        height: '70%',
        background: '#dcedc8'
    },
    grow: {
        flexGrow: 3
    },
    toolbarMain: {
        justifyContent: 'space-around',
        height: '100px',
    },
    button: {
        color: '#a8ada3',
        height: '100%',
        width: '100%',
    },
    title: {
        height: '70%',
        background: '#dcedc8',  
        textAlign: 'center',
        paddingTop: '15%',
        paddingBottom: '15%',
    },
    jobTitle: {
        marginTop: '2%'
    },
    avatar: {
        margin: 25,
        width: 100,
        height: 100,
    },
    body: { 
        margin: '5%',
    },
    footer: {
        height: '30%',
        background: '#dcedc8',
        padding: '5% 25% 5% 25%',
        margin: 'auto',
        textAlign: 'center',
        fontFamily: [
          'Inconsolata',
          'sans-serif'
        ].join(','),
        fontSize: 12
    },
    socialIcons: {
        marginLeft: '45%',
        marginTop: '2.5%'
    },
    socialIcon: {
        float: 'left',
        margin: '0 0 0 5px'
    },
    '@media (max-width: 500px)': { // Less than 500px
        socialIcons: {
          marginLeft: '30%',
          marginTop: '2.5%',
          marginBottom: '2.5%'
        },
        footer: {
          paddingTop: '10%',
          paddingBottom: '10%'
        }
    }
})

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
        fontSize: '50'
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
