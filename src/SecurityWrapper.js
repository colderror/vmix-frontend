import React from "react";
import { useNavigate } from "react-router-dom";
import App from "./App";

const navigate = useNavigate();

const restoreOriginalUri = () => {
    const originalUri = sessionStorage.getItem("originalUri");
    if (originalUri) {
        sessionStorage.removeItem("originalUri");
        navigate(originalUri);
    }
};

const SecurityWrapper = () => {
    const { isAuthenticated } = currentUser();

    useEffect(() => {
        if (isAuthenticated) {
            restoreOriginalUri();
        }
    }, [isAuthenticated]);

    return isAuthenticated ? <App /> : null;
}