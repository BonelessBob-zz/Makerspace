import React from 'react'
import Project from './Project'


class Projects extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillUnmount() {
        this.props.changeBg()
    }

    render() {
        return(
            <Project />
        )
    }
}

export default Projects

