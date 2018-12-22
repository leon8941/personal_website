import { createMuiTheme } from '@material-ui/core/styles'

export const styles = theme => ({
    layout: {
        width: 'auto',
    },
    header: {
        height: '70%',
        background: '#dcedc8'
    },
    toolbarMain: {
        justifyContent: 'space-evenly',
        height: '100px',
    },
    button: {
        color: '#a8ada3',
        height: '100%',
        width: '100%',
        marginRight: '5%'
    },
    title: {
        height: '70%',
        background: '#dcedc8'
    },
    jobTitle: {
        marginTop: '2%'
    },
    avatar: {
        marginRight: '60%',
        marginLeft: '5%',
        width: 90,
        height: 90
    },
    body: {

    }
})

export const themes = createMuiTheme({
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontWeightMedium: 500,
      body1: {
        fontWeight: 500,
      },
      subtitle1: {
        fontSize: 40,
      },
      button: {
        fontStyle: 'italic',
      }, 
      h1: {
        color: '#9CCC65'
      },
      h6: {
        color: '#9CCC65'
      }
    },
  })
