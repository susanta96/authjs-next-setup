"use client";

import * as z from 'zod';
import { useForm } from "react-hook-form";
import { LoginSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FormError } from '@/components/form-error';
import { FormSucess } from '@/components/form-success';
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { Form, FormControl, FormMessage, FormField, FormItem, FormLabel } from "@/components/ui/form"; 
import { login } from '@/actions/login';

export const LoginForm = () => {
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        login(values);
    }

    return (
        <CardWrapper
            headerLabel="Welcome Back"
            backButtonHref="/auth/register"
            backbuttonLabel="Don't have an account?"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
                    <div className="space-y-4">
                        <FormField control={form.control} name='email' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Email
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='john.doe@asdev.dev' type='email' />
                                </FormControl>
                                <FormMessage /> 
                            </FormItem>
                        )} />
                        <FormField control={form.control} name='password' render={({field}) => (
                            <FormItem>
                                <FormLabel>
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='******' type='password' />
                                </FormControl>
                                <FormMessage /> 
                            </FormItem>
                        )} />
                    </div>
                    {/* <FormSucess message='Successfully Updated.' />
                    <FormError message='Something is missing' /> */}
                    <Button className='w-full' type='submit'>
                        Login 
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}