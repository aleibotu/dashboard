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

const TypeMapping = {
    air: 1,
    sand: 2,
    water: 3,
    move: 4
}
/**
 *
 * @param type 0: '全部' 1: '空气', 2 '土壤', 3: '水质', 8: '移动气象站'
 * @returns {Promise<null|*>}
 */
export const getDevices = async ({type}) => {
    try {
        console.log('this is type', type);
        if (type === 0) {
            return await db.device.findMany()
        } else {
            return await db.device.findMany({
                where: {
                    topic: {
                        startsWith: `sensor/00${TypeMapping[type]}`
                    }
                }
            })
        }
    } catch (e) {
        return null
    }
}
