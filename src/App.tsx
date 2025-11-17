import './App.css'
import {ThemeProvider} from "./components/ThemeProvider.tsx";
import {LightDarkToggle} from "./components/ui/LightDarkToggle.tsx";
import {cn} from "./lib/utils.ts";
import {BrowserRouter} from "react-router";
import {AppRoutes} from "./routes/routes.tsx";

function App() {

    return (
        <BrowserRouter>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <AppRoutes/>
                <LightDarkToggle className={cn("fixed", "right-0", "top-1/2")}/>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
