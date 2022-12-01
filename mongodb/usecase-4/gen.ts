import { faker } from '@faker-js/faker';
import mongoose from 'mongoose';

import { Stock } from './stock';
import { User } from './user';

const seed = async () => {
  await mongoose.connect('mongodb://localhost:27017/usecase-4');

  // generate 100 stock
  await Stock.deleteMany({});
  const stocks = Array.from({ length: 100 }).map(() => {
    const stock = new Stock({
      name: faker.company.name(),
      price: Math.random() * 1000,
    });

    return stock;
  });

  await Stock.insertMany(stocks);

  // generate 1000 users
  await User.deleteMany({});
  const users = Array.from({ length: 100 }).map(() => {
    // generate user with random stocks
    const user = new User({
      name: faker.name.fullName(),
      stocks: Array.from({ length: 10 }).map(() => {
        const stock = stocks[Math.floor(Math.random() * stocks.length)];

        return {
          _id: stock._id,
          name: stock.name,
          quantity: Math.floor(Math.random() * 100),
        };
      }),
    });

    return user;
  });

  User.aggregate([])
  await User.insertMany(users);

  process.exit(0);
};

seed();
