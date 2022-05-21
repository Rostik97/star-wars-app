import React from "react";
import {SwapiServiceConsumer} from "../ServiceContext/ServiceContext";


const withSwapiService = (Wrapped) => {
    console.log(Wrapped)
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        return <Wrapped {...props} swapiService = {swapiService}/>
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;