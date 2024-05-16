import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient({log: ['query', 'info']})

async function main() {
    const user = await prisma.user.create({
        data: {
            username: 'admin',
            password: '123456'
        }
    })
    console.log(user);
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