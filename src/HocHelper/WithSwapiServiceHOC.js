import React from "react";
import {SwapiServiceConsumer} from "../ServiceContext/ServiceContext";


const withSwapiService = (Wrapped, mapPropsFunction) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const mappedProps = mapPropsFunction(swapiService);
                        return (
                            <Wrapped {...props} {...mappedProps}/>
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
}

export default withSwapiService;