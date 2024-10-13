import { CreateRoutsGraphqlInput } from './create-routs-graphql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRoutsGraphqlInput extends PartialType(CreateRoutsGraphqlInput) {
  @Field(() => Int)
  id: number;
}
