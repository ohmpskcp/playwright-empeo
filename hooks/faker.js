import { faker } from '@faker-js/faker';

const suffix = faker.number.int({ min: 10, max: 99 });


export function createRandomUser() {
  return {
    username: `${faker.internet.username()}_${suffix}`,
    email: `test_${suffix}${faker.internet.displayName()}_${suffix}@outlook.com`,
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    suffix : faker.number.int({ min: 10, max: 99 })
  };
}