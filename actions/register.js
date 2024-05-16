'use server'
import bcrypt from 'bcryptjs'
import {LoginSchema} from "@/schemas";
import {db} from "@/lib/db";
import {getUserByName} from "@/data/user";
import {revalidatePath} from "next/cache";

export const register = async (formData) => {
    const {username, password, description} = formData;
    const validatedFields = LoginSchema.safeParse({username, password});

    if (!validatedFields.success) {
        return {success: false, msg: 'Invalid fields'}
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await getUserByName(username)

    if (user) return {success: false, msg: 'email already in use'}

    if (!register) return {
        success: false,
        msg: 'code wrong, retry'
    }

    await db.user.create({data: {username, password: hashedPassword, description}})

    revalidatePath('/users')

    return {success: true, msg: 'user created'}
}
