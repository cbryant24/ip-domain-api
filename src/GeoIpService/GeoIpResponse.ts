import { Field, ObjectType } from 'type-graphql';
import { GeoIpSchema } from './GeoIpSchema';

@ObjectType({ description: 'GeoIp Response' })
export class GeoIpResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  data?: GeoIpSchema;

  @Field({ nullable: true })
  error?: String;
}
