import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "core/axios-config";

import { ToastContainer } from "react-toastify";
import { Routes } from "./Routes";

export const App: React.FC = () => {
    return (
        <>
            <ToastContainer/>
            <Routes/>
        </>
    );
}