import { Field, ObjectType } from 'type-graphql';
// import { IsEmail, Length } from 'class-validator';

@ObjectType({ description: 'Rdap Schema' })
export class RdapSchema {
  @Field()
  orgName: String;

  @Field()
  address: String;

  @Field()
  city: String;

  @Field()
  stateProv: String;

  @Field()
  postalCode: String;

  @Field()
  country: String;

  @Field()
  orgTechPhone: String;

  @Field()
  orgTechEmail: String;
}
