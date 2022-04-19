import { hash } from 'argon2';
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient()

async function main() {

  await prisma.user.create({
    data: {
        email: 'admin@nexev.it',
        name: 'administrator',
        password: await hash('djf3425!fdfh$'),
    }
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })