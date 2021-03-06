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
      padding: '0 20% 0 20%'
    },
    skillSets: {

    },
    '@media (max-width: 800px)': { // Less than 800px
      content: {
        margin: '0 1% 0 1%',
      },
      section: {
        padding: '0 1% 0 1%'
      },
    },
    careerPaths: {
      fontFamily: [
        'Inconsolata',
        'sans-serif'
      ].join(','),
      padding: '15% 0 0 0'
    }
})

export const themes = createMuiTheme({
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
        fontStyle: 'italic',
      }
    },
  })
