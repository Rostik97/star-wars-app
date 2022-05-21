import Spinner from "../Spinner/Spinner";
import React, { Component } from "react";

const withData = (View, getData) => {
    return class extends Component {
        state = {
            objectsList: null
        }

        componentDidMount() {
            getData()
                .then((objectsList) => {
                    this.setState({objectsList})
                })
                .catch(this.errorHandle)
        }

        errorHandle(err) {
            console.log("Error " + err)
        }

        render() {
            const {objectsList} = this.state;

            if (objectsList == null) {
                return <Spinner/>
            }

            return (
                <View {...this.props} data={objectsList}/>
            )
        }
    }
}
export default withData;