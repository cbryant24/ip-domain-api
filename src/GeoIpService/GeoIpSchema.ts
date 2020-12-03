import { Field, ObjectType } from 'type-graphql';
// import { IsEmail, Length } from 'class-validator';

@ObjectType({ description: 'GeoIp Schema' })
export class GeoIpSchema {
  @Field((type) => [Number])
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

  @Field((type) => [Number])
  ll: Number[];

  @Field()
  metro: Number;

  @Field()
  area: Number;
}
