import React from "react";
import {createRoot} from "react-dom/client";
import { Router } from "react-router-dom";
import App from "./App";

const root = createRoot(document.getElementById("root"));
console.log("root", root)
root.render(
    
        <App/>
    
);