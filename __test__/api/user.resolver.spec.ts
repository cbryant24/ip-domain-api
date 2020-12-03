const db = require('../db');
import { runQuery } from '../run';
import { GraphQLError } from 'graphql';

describe('Register Mutation', () => {
  beforeAll(db.connectToDB);

  afterAll(db.disconnectDB);

  afterAll(db.cleanDB);

  const registerMutation = `
    mutation Register($name: String!,$email : String!,$password : String!) {
      registerUser(
        name : $name,email : $email,password: $password
      ) {
        success
        data{
          name 
          email
        }
        error
      }
    }
  `;

  it('ran successfully', async () => {
    const user = {
      name: 'test',
      email: 'test@gmail.com',
      password: '123456',
    };

    const response = await runQuery(registerMutation, {
      name: user.name,
      email: user.email,
      password: user.password,
    });

    expect(response).toMatchObject({
      data: {
        registerUser: {
          success: true,
          data: {
            name: user.name,
            email: user.email,
          },
          error: null,
        },
      },
    });
  });
});
