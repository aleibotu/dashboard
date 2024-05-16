import {db} from "@/lib/db";

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
