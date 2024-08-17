import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import Joi from "joi"
import { joiResolver } from "@hookform/resolvers/joi"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useEffect } from "react"
import userService from "@/services/userService"
import { useNavigate } from "react-router-dom";

export default function Login() {

    const schema = Joi.object({
        email: Joi.string()
            .max(30)
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required().messages({
                'string.max': 'Email deve ter tamanho maximo de 30 caracteres',
                'any.required': 'Email e obrigatorio',
                'string.email': 'Email deve ser valido',
                'string.empty': 'Digite seu email',

            }),
        password: Joi.string()
            .max(30)
            .required().messages({
                'string.empty': 'Digite sua senha',
                'string.max': 'Senha deve ter tamanho maximo de 30 caracteres',
                'any.required': 'Senha e obrigatoria',
            }),
        remember_me: Joi.boolean().default(false)
    });

    const { handleSubmit, formState: { errors }, control } = useForm({
        resolver: joiResolver(schema),
        defaultValues: {
            email: "",
            password: "",
            remember_me: false
        }
    });

    const navigate = useNavigate();

    const isAuthenticated = async () => {

        if (!await userService.checkAuthentication()) {

            return;

        }
        

        navigate("/");

    }

    useEffect(() => {

        isAuthenticated();

    }, []);

    const submit = async (credentials: any) => {        

        const { data, status } = await userService.login(credentials);

        if (!data || !status) {
            throw "Credenciais invalidas";
        }

        if(credentials.remember_me) {
    
            localStorage.setItem("user", JSON.stringify({
                token: data.token,
                ...data.user
            }));

        } else {

            sessionStorage.setItem("user", JSON.stringify({
                token: data.token,
                ...data.user
            }));
        }

        navigate("/");

    }

    return (
        <div className="login-page">
            <div
                className="absolute inset-0 h-full w-full z-[-1] bg-black bg-cover bg-center"
                style={{
                    backgroundColor: '#000000',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%232064E8'/%3E%3Cstop offset='1' stop-color='%23000000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFFFFF' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFFFFF' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }}
            >
            </div>

            <div className="h-screen flex justify-center items-center">
                <Card className="w-2/6">
                    <CardHeader>
                        <CardTitle>Login</CardTitle>
                        <CardDescription>Digite suas credenciais</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...control}>
                            <form method="post" onSubmit={handleSubmit(submit)} className="flex align-center justify-center flex-col space-y-4">
                                <FormField
                                    control={control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold"> Email </FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="Digite seu e-mail" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}>
                                </FormField>
                                <FormField
                                    control={control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="font-bold"> Senha </FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="Digite sua senha" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}>
                                </FormField>

                                <FormField
                                    control={control}
                                    name="remember_me"
                                    render={({ field }) => (
                                        <FormItem className="flex items-center space-x-2">
                                            <div className="flex items-center space-x-2">
                                                <FormLabel className="font-bold">Lembrar de mim</FormLabel>
                                                <Input
                                                    className="h-5 w-5"
                                                    type="checkbox"
                                                    checked={field.value}
                                                    onChange={(e: any) => field.onChange(e.target.checked)}
                                                />
                                            </div>
                                            <FormMessage>{errors.remember_me?.message}</FormMessage>
                                        </FormItem>
                                    )}>
                                </FormField>
                                <div className="flex align-center justify-center w-full my-2">
                                    <Button className="w-full" type="submit">Submit</Button>
                                </div>
                            </form>
                        </Form>
                    </CardContent>

                </Card>
            </div>
        </div>

    )
}