import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

app.get('/api/provinces', async (req, res) => {
  const provinces = await prisma.province.findMany();
  res.json(provinces);
});

app.get('/api/provinces/:provinceId/cities', async (req, res) => {
  const { provinceId } = req.params;
  const cities = await prisma.city.findMany({
    where: { provinceId: parseInt(provinceId) },
  });
  res.json(cities);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
