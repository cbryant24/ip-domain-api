import { Field, ObjectType, ID } from 'type-graphql';
import { IsEmail, Length } from 'class-validator';

@ObjectType({ description: 'User Schema' })
export class UserSchema {
  @Field(() => ID)
  id: String;

  @Field()
  @Length(1, 30)
  name: String;

  @Field()
  @IsEmail()
  @Length(1, 30)
  email: String;
  password: String;
}
