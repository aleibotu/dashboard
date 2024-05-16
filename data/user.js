'use server'
import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";

export const getUserByName = async (username) => {
    try {
        return await db.user.findUnique({where: {username}});
    } catch (e) {
        return null
    }
}

export const getUserById = async (id) => {
    try {
        return await db.user.findUnique({where: {id}});
    } catch (e) {
        return null
    }
}

export const getUsers = async () => {
    try {
        return await db.user.findMany();
    } catch (e) {
        return null
    }
}

export const delUser = async (username) => {
    try {
        await db.user.delete({where: {username}});
        revalidatePath('/users')
    } catch (e) {
        console.log(e)
        return null
    }
}
