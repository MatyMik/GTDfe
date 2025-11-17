import {Button} from "../components/ui/button.tsx";
import {GtdIcon} from "../components/ui/GtdIconn.tsx";
import {NavLink} from "react-router";

export const LandingPage = () => {
    return <div className="flex flex-col min-h-screen items-center justify-center p-24">
        <h1 className="flex items-center gap-4">
            <span className="h-sm"><GtdIcon/></span>
            Landing Page
        </h1>
        <div className="flex flex-row items-center gap-4">
            <Button asChild><NavLink to={"/auth/login"}>Log In</NavLink></Button>
            or
            <Button variant="outline">Sign Up</Button>
        </div>
    </div>;
}