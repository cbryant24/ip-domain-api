import { Field, ObjectType } from 'type-graphql';
// import { IsEmail, Length } from 'class-validator';

@ObjectType({ description: 'Reverse DNS Schema' })
export class ReverseDnsSchema {
  @Field((type) => [String])
  reverseDns: String[];
}
