import { Field, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Reverse DNS Schema' })
export class ReverseDnsSchema {
  @Field(() => [String])
  reverseDns: String[];
}
