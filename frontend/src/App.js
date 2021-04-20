import React, {useState} from 'react';
import styles from './main.scss';
import Toolbar from './components/Toolbar'
import Homepage from './components/Homepage'
import Projects from './components/Projects'
import User from './components/User'
import Createproject from './components/Createproject'
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

function changeBg() {
  console.log(typeof(styles.app))
}




const App = () => {
  const [color1, setColor1] = useState(1)
  const [color2, setColor2] = useState(1)
  const colors = ["lightblue", "lightyellow", "lightpink", "cornsilk", "lavenderblush", "moccasin", "azure", "floralwhite", "honeydew", "mintcream", "thistle", "palegreen"]

  const changeBg = () => {
    let i1 = Math.floor(colors.length * Math.random())
    setColor1(colors[i1])
    let i2 = Math.floor(colors.length * Math.random())
    i2 != i1 ? setColor2(colors[i2]) : setColor2("lightgray")
  }
  
  return(
    <div className={styles.app} style={{
      "backgroundImage": `radial-gradient(${color1}, ${color2})`
    }}>
      <Router>
        <Toolbar />
        <Switch>
          <Route exact path="/" render={() => <Homepage changeBg={changeBg}/>} />
          <Route exact path="/projects" render={() => <Projects changeBg={changeBg}/>} />
          <Route exact path="/user" render={() => <User changeBg={changeBg}/>} />
          <Route exact path="/createproject" render={() => <Createproject changeBg={changeBg}/>} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;