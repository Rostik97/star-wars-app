import Error from "../Error/Error";
import React, {Component} from "react";

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorBoundry catch error: " + errorInfo)
        this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return <Error/>
        }
        return this.props.children;

    }
}