import { Field, ObjectType } from 'type-graphql';
import { RdapSchema } from './RdapSchema';

@ObjectType({ description: 'Rdap Response' })
export class RdapResponse {
  @Field()
  success: boolean;

  @Field({ nullable: true })
  data?: RdapSchema;

  @Field({ nullable: true })
  error?: String;
}
