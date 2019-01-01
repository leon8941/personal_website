import { createMuiTheme } from '@material-ui/core/styles'

export const styles = theme => ({
    content: {
        margin: '0 5% 0 5%',
        textAlign: 'center',
    },
    avatar: {
      margin: 25,
      width: 100,
      height: 100,
    },
    section: {
      margin: '25% 0 25%',
    },
    skillSets: {

    },
    '@media (max-width: 800px)': { // Less than 800px
      content: {
        margin: '0 1% 0 1%',
      },
    },
    careerPaths: {
      fontFamily: 'Inconsolata'
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
        fontStyle: 'italic',
      }
    },
  })
