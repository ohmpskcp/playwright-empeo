import { faker } from '@faker-js/faker';



export function createRandomUser() {
  return {
    username: `${faker.internet.username()}_${faker.number.int({ min: 10, max: 99 })}`,
    email: `test_${faker.internet.displayName()}_${faker.number.int({ min: 10, max: 99 })}@outlook.com`,
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName()
  };
}