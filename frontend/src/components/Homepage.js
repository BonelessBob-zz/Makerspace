import React from 'react'
import Post from './Post'


class Homepage extends React.Component{

    constructor(props){
        super(props)
    }

    componentWillUnmount() {
        this.props.changeBg()
    }

    render() {
        return(
            <Post />
        )
    }

}

export default Homepage

