import { createMuiTheme } from '@material-ui/core/styles'

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
            fontSize: '50'
        }, 
        h1: {
            color: '#8BC34A'
        },
        h2: {
            color: '#8BC34A'
        },
        h4: {
            color: '#8BC34A'
        }
    }, 
  })


export const styles = theme => ({
    body: {
        fontFamily: [
            'Inconsolata',
            'sans-serif'
        ].join(','),
        // position: 'absolute',
        
    },
    introduction: {
        background: '#dcedc8',
        height: 'fit-content',
        padding: "10% 0 10% 0",
        typography: {color:'#8BC34A'}
    },
    typography: {
        color: '#8BC34A'
    },
    works: {
        
    },
    gridContainer: {

    }
})