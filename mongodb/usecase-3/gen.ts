import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';

import { Team } from './team';
import { User } from './user';

const seed = async () => {
  await mongoose.connect('mongodb://localhost:27017/usecase-3');

  await User.deleteMany({});

  const users = Array.from({ length: 1000 }).map(() => {
    const user = new User({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      age: Math.floor(Math.random() * 40) + 20,
    });

    return user;
  });

  await User.insertMany(users);

  await Team.deleteMany({});
  const teams = Array.from({ length: 100 }).map(() => {
    const team = new Team({
      name: faker.company.name(),
      members: Array.from({ length: 10 }).map(() => {
        const user = users[Math.floor(Math.random() * users.length)];

        return {
          id: user._id,
          email: user.email,
        };
      }),
    });

    return team;
  });

  await Team.insertMany(teams);

  process.exit(0);
};

seed();
