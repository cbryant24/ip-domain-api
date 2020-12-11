import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'GeoIp Schema' })
export class GeoIpSchema {
  @Field(() => [Number])
  range: Number[];

  @Field()
  country: String;

  @Field()
  region: String;

  @Field()
  eu: String;

  @Field()
  timezone: String;

  @Field()
  city: String;

  @Field(() => [Number])
  ll: Number[];

  @Field()
  metro: Number;

  @Field()
  area: Number;
}
