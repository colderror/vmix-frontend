import React from "react";
import Root from "./router"
import axios from "axios";
const CurrentUserContext = React.createContext(null);


const App = () => {
    const consumeApi = (input) => {
        const options = {
            method: 'GET',
            url: 'http://localhost:3001/',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
            },
            body: {
                input: input
            }
        };

        axios(options)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        // <CurrentUserContext.Provider value={value}>
        //     <Root />
        // </CurrentUserContext.Provider>
        
        // <div>{<Root/>}</div>
        <div>
            <button onClick={()=>consumeApi(1)}>1</button>
            <button onClick={()=>consumeApi(2)}>2</button>
            <button onClick={()=>consumeApi(3)}>3</button>
            <button onClick={()=>consumeApi(4)}>4</button>
            <button onClick={()=>consumeApi(5)}>5</button>
        </div>
    );
};

export default App;