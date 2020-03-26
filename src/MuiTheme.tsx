import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({ 
  "palette":{ 
    "common":{
        "black":"#000",
        "white":"#fff"
      },
    "background":{ 
      "paper":"#fff",
      "default":"#f5faf6"
    },"primary":{ 
      "light":"#fafffb",
      "main":"#558b2f",
      "dark":"#33691e",
      "contrastText":"#fff"
    },"secondary":{
      "light":"#98ee99",
      "main":"#66bb6a",
      "dark":"#338a3e",
      "contrastText":"#fff"
    },"error":{
      "light":"#be9c91",
      "main":"#8d6e63",
      "dark":"#5f4339",
      "contrastText":"#fff"
    },"text":{
      "primary":"rgba(0, 0, 0, 0.87)",
      "secondary":"rgba(0, 0, 0, 0.54)",
      "disabled":"rgba(0, 0, 0, 0.38)",
      "hint":"rgba(0, 0, 0, 0.38)"}
    }})