import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "./tooltip.tsx";
import {Button} from "./button.tsx";
import {MoonIcon, SunIcon} from "lucide-react";
import type {FC} from "react";
import {useTheme} from "../ThemeProvider.tsx";

type LightDarkToggleProps = {
    className?: string
}

export const LightDarkToggle: FC<LightDarkToggleProps> = ({className}) => {
    const {setTheme, theme} = useTheme();
    const onClickHandler = () => setTheme(theme === "light" ? "dark" : "light");
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild className={className}>
                    <Button variant="outline" onClick={onClickHandler}>
                        <SunIcon className="block dark:hidden"/>
                        <MoonIcon className="hidden dark:block"/>
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span className="inline-block dark:hidden">Enable dark mode</span>
                    <span className="hidden dark:inline-block">Enable light mode</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}