import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const province1 = await prisma.province.create({
    data: {
      name: 'Tokyo',
      cities: {
        create: [
          { name: 'Shinjuku' },
          { name: 'Shibuya' },
          { name: 'Ginza' },
        ],
      },
    },
  });

  const province2 = await prisma.province.create({
    data: {
      name: 'Osaka',
      cities: {
        create: [
          { name: 'Osaka City' },
          { name: 'Sakai' },
          { name: 'Suita' },
        ],
      },
    },
  });

  const province3 = await prisma.province.create({
    data: {
      name: 'Hokkaido',
      cities: {
        create: [
          { name: 'Sapporo' },
          { name: 'Asahikawa' },
          { name: 'Hakodate' },
        ],
      },
    },
  });

  console.log({ province1, province2, province3 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
