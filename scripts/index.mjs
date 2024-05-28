import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({log: ['query', 'info']})

async function main() {
    const users = await prisma.user.findMany({
        where: {
            username: {
                startsWith: 'a'
            },
        }
    })
    console.log(users);
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
