import {Component} from "react";
import Error from "../Error/Error";

export default class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        console.log("ErrorBoundry " + errorInfo)
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