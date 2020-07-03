import { createMuiTheme } from '@material-ui/core/styles'

// COLOR PALETTE

// /* CSV */
// f06543,00a5cf,152614,25a18e,7ae582

// /* Array */
// ["e8e5da","f06543","00a5cf","152614","25a18e","7ae582"]

// /* Object */
// {""Alabaster":"e8e5da",Orange Soda":"f06543","Cerulean Crayola":"00a5cf","Phthalo Green":"152614","Persian Green":"25a18e","Light Green":"7ae582"}

// /* Extended Array */
// [
// PRIMARY {"name":"Alabaster","hex":"e8e5da","rgb":[232,229,218],"cmyk":[0,1,6,9],"hsb":[47,6,91],"hsl":[47,23,88],"lab":[91,-1,6]},
// ACCENT-SECONDARY {"name":"Orange Soda","hex":"f06543","rgb":[240,101,67],"cmyk":[0,58,72,6],"hsb":[12,72,94],"hsl":[12,85,60],"lab":[60,52,46]},
// TERTIARY {"name":"Cerulean Crayola","hex":"00a5cf","rgb":[0,165,207],"cmyk":[100,20,0,19],"hsb":[192,100,81],"hsl":[192,100,41],"lab":[63,-21,-31]},
// TEXT {"name":"Phthalo Green","hex":"152614","rgb":[21,38,20],"cmyk":[45,0,47,85],"hsb":[117,47,15],"hsl":[117,31,11],"lab":[13,-12,10]},
// ACCENT {"name":"Persian Green","hex":"25a18e","rgb":[37,161,142],"cmyk":[77,0,12,37],"hsb":[171,77,63],"hsl":[171,63,39],"lab":[60,-37,0]},
// SECONDARY {"name":"Light Green","hex":"7ae582","rgb":[122,229,130],"cmyk":[47,0,43,10],"hsb":[124,47,90],"hsl":[124,67,69],"lab":[83,-51,39]}]

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e8e5da'
    },
    secondary: {
      main: '#7ae582',
      contrastText: '#ffcc00'
    },
    tertiary: {
      main: '#00a5cf'
    },
    accent: {
      main: '#25a18e'
    },
    accent_secondary: {
      main: '#f06543'
    },
    text: {
      primary: '#152614'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
})
