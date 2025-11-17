import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../components/ui/card.tsx";
import {Button} from "../components/ui/button.tsx";
import {NavLink} from "react-router";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../components/ui/form.tsx";
import {Input} from "../components/ui/input.tsx";

const loginFromSchema = z.object({
    email: z.email(),
    password: z.string(),
});

export const Login = () => {
    const form = useForm<z.infer<typeof loginFromSchema>>({
        resolver: zodResolver(loginFromSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    })

    const handleSubmit = () => {
        console.log("Form submitted")
    }
    return <div className="flex flex-col min-h-screen items-center justify-center p-24">
        <h1>Login Page</h1>
        <Card>
            <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Login to your GTD App</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className={"flex flex-col gap-4"}>
                        <FormField control={form.control} name="email" render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder={"test@test.com"} type="email" {...field}/>
                                </FormControl>
                                <FormDescription>This is the email field</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        <FormField control={form.control} name="password" render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder={"password"} type="password" {...field}/>
                                </FormControl>
                                <FormDescription>This is the password field</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        <Button type="submit">Login</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                Don't have an account? <Button asChild>
                <NavLink to="/auth/register">Sign up</NavLink></Button>
            </CardFooter>
        </Card>
    </div>;
}