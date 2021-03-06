import { Field, ObjectType } from 'type-graphql';
import { ReverseDnsSchema } from './ReverseDnsSchema';

@ObjectType({ description: 'Rdap Response' })
export class ReverseDnsResponse {
  @Field()
  success: boolean;

  @Field(() => ReverseDnsSchema)
  data?: ReverseDnsSchema;

  @Field({ nullable: true })
  error?: String;
}
