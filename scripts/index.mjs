import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({log: ['query', 'info']})

async function main() {
    const devices = await prisma.device.findMany({
        where: {
            topic: 'sensor/002',
        }
    })
    console.log(devices);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
