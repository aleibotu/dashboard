'use server'
import {signIn} from "@/auth";
import {AuthError} from "next-auth";
import {getUserByName} from "@/data/user";
import {DEFAULT_LOGIN_REDIRECT} from "@/routes";

export const login = async (formData) => {
    const {username, password} = formData;

    const existingUser = await getUserByName(username);

    if(!existingUser) {
        return {success: false, msg: 'user does not exist'}
    }

    try {
        await signIn('credentials', {
            username,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }catch (error) {
        if(error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {success: false, msg: 'Invalid credentials'}
                default:
                    return {success: false, msg: 'something went wrong'}
            }
        }
        throw error
    }
}
