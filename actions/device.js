'use server'
import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";

export const addDevice = async (formData) => {
    const {topic, description, gps, userId} = formData;
    try {
        await db.device.create({
            data: {
                topic,
                description,
                longitude: gps[0],
                latitude: gps[1],
                createrId: userId
            }
        })
        revalidatePath('/devices/air')
    } catch (e) {
        return null
    }
}

export const delDevice = async (topic) => {
    try {
        await db.device.delete({where: {topic}})
        revalidatePath('/devices/air')
    } catch (e) {
        return null
    }
}

export const getDevices = async () => {
    try {
        return await db.device.findMany()
    } catch (e) {
        return null
    }
}
