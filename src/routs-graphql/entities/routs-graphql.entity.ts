import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class RoutsGraphql {

  @Field(() => Int)
  id: number

  @Field()
  name: string

  @Field()
  color: string

  @Field(() => Float)
  price: number

  @Field()
  createAt: Date

  @Field()
  updateAt: Date

}
