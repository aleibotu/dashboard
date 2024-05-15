import {redirect} from 'next/navigation'
import {LoginForm} from "@/app/auth/login/loginForm";

export default function Page() {
    async function login() {
        'use server'
        redirect('/home')
    }

    return (
        <LoginForm />
    )
}
