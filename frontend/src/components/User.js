import React from 'react'
import { useHistory, withRouter } from 'react-router'
import { 
    Button
 } from "@material-ui/core";

class User extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount() {
        this.props.changeBg()
    }

    redirect = (path) => {
        const { history } = this.props
        history.push(path)
    }

    render() {
        return(
            <Button onClick={() => this.redirect("/createproject")}>Create Project</Button>
        )
    }

}

export default withRouter(User)

