import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';

import { Company } from './company';

(async () => {
  await mongoose.connect('mongodb://localhost:27017/usecase-2');

  await Company.deleteMany({});

  const companyNames = new Set();

  while (companyNames.size < 100) {
    companyNames.add(faker.company.name());
  }

  const companies = Array.from(companyNames).map((companyName) => {
    const company = new Company({
      name: companyName,
      founder: faker.name.fullName(),
      value: Math.random() * 1000000,
      employees: Array.from({ length: 1000 }).map(() => ({
        name: faker.name.fullName(),
        email: faker.internet.email(),
        age: Math.floor(Math.random() * 40) + 20,
      })),
    });
  
    return company;
  });

  await Company.insertMany(companies);

  process.exit(0);
})();
