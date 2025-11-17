import {Route, Routes} from "react-router";
import {LandingPage} from "../landing/LandingPage.tsx";
import {Login} from "../authentication/Login.tsx";
import {Register} from "../authentication/Register.tsx";

export const AppRoutes = () =>
    (
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/auth/register" element={<Register/>}/>

        </Routes>
    )
