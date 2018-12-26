import { createMuiTheme } from '@material-ui/core/styles'

export const styles = theme => ({
    content: {
        margin: '0 15% 0 15%',
    },
    avatar: {
      margin: 25,
      width: 100,
      height: 100,
    },
    section: {
      margin: '5% 0 5%'
      // marginTop: `${theme.spacing.unit * 3}%`,
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
