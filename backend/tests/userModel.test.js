const mongoose = require('mongoose');
const UserModel = require('../models/userModel');

beforeAll(async () => {
  // Connect to a test database before running the tests
  await mongoose.connect('mongodb+srv://rishenlithan213:emp@employeecluster.c5zakvc.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  // Disconnect from the test database after all tests are done
  await mongoose.connection.close();
});

describe('User Model Tests', () => {
  it('should create a new user with valid data', async () => {
    const userData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'testpassword',
    };

    const newUser = await UserModel.create(userData);

    // Ensure the properties are correct
    expect(newUser.username).toBe(userData.username);
    expect(newUser.email).toBe(userData.email);
    expect(newUser.password).toBe(userData.password);
  });

  it('should require a username, email, and password', async () => {
    // Attempt to create a user with missing required fields
    const incompleteUser = {};

    try {
      await UserModel.create(incompleteUser);
      // If the creation is successful, the test should fail
      fail('Validation should have failed for missing fields');
    } catch (error) {
      // Ensure the error is due to validation failure
      expect(error.name).toBe('ValidationError');
    }
  });
});
