import React from 'react'
import Project from './Project'
import styles from '../main.scss'
import { 
    Typography
 } from "@material-ui/core"


class Homepage extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillUnmount() {
        this.props.changeBg()
    }

    render() {
        return(
            <Typography variant="p" component="p" className={styles.text}>
                Offisielle Makerspace Nettsiden!
            </Typography>
        )
    }

}

export default Homepage

