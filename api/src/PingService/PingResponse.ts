import { Field, ObjectType } from 'type-graphql';
import { PingSchema } from './PingSchema';

@ObjectType({ description: 'Ping Response' })
export class PingResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  data?: PingSchema;

  @Field({ nullable: true })
  error?: String;
}
