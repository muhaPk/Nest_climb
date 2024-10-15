import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class RoutsGraphql {

  @Field()
  id: string

  @Field()
  title: string

  @Field()
  content: string

  @Field()
  createAt: Date

}
