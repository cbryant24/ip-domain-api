import { Field, ObjectType } from 'type-graphql';

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
