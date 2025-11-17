import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../components/ui/card.tsx";
import {Button} from "../components/ui/button.tsx";
import {NavLink} from "react-router";
import * as yup from "yup"
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../components/ui/form.tsx";
import {Input} from "../components/ui/input.tsx"

const registerFromSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match").required(),
});

export const Register = () => {
    const form = useForm({
        resolver: yupResolver(registerFromSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        }
    })

    const handleSubmit = () => {
        const registerData = {
            email: form.getValues("email"),
            password: form.getValues("password"),
        };
        console.log("Form submitted", registerData)
    }
    return <div className="flex flex-col min-h-screen items-center justify-center p-24">
        <h1>Register</h1>
        <Card>
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Register to your GTD App</CardDescription>
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
                        <FormField control={form.control} name="confirmPassword" render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input placeholder={"password"} type="password" {...field}/>
                                </FormControl>
                                <FormDescription>This is the confirm password field</FormDescription>
                                <FormMessage/>
                            </FormItem>
                        )}/>
                        <Button type="submit">Sign Up</Button>
                    </form>
                </Form>
            </CardContent>
            <CardFooter>
                Don't have an account? <Button asChild>
                <NavLink to="/auth/login">Sign up</NavLink></Button>
            </CardFooter>
        </Card>
    </div>;
}