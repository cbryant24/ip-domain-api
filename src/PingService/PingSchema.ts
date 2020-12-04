import { Field, ObjectType, Float } from 'type-graphql';
// import { IsEmail, Length } from 'class-validator';

@ObjectType({ description: 'Ping Schema' })
export class PingSchema {
  @Field()
  host: String;

  @Field()
  numeric_host: String;

  @Field()
  alive: Boolean;

  @Field()
  output: String;

  @Field()
  orgTechPhone: String;

  @Field()
  orgTechEmail: String;
}
