import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RoutesService } from '../routes/routes.service';
import { RoutsGraphql } from './entities/routs-graphql.entity';
import { CreateRoutsGraphqlInput } from './dto/create-routs-graphql.input';
import { UpdateRoutsGraphqlInput } from './dto/update-routs-graphql.input';

@Resolver(() => RoutsGraphql)
export class RoutsGraphqlResolver {
  constructor(private readonly routsGraphqlService: RoutesService) {}

  // @Mutation(() => RoutsGraphql)
  // createRoutsGraphql(@Args('createRoutsGraphqlInput') createRoutsGraphqlInput: CreateRoutsGraphqlInput) {
  //   return this.routsGraphqlService.create(createRoutsGraphqlInput);
  // }

  @Query(() => [RoutsGraphql], { name: 'routsGraphql' })
  findAll() {
    return this.routsGraphqlService.getRoutes();
  }

  // @Query(() => RoutsGraphql, { name: 'routsGraphql' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.routsGraphqlService.findOne(id);
  // }

  // @Mutation(() => RoutsGraphql)
  // updateRoutsGraphql(@Args('updateRoutsGraphqlInput') updateRoutsGraphqlInput: UpdateRoutsGraphqlInput) {
  //   return this.routsGraphqlService.update(updateRoutsGraphqlInput.id, updateRoutsGraphqlInput);
  // }

  // @Mutation(() => RoutsGraphql)
  // removeRoutsGraphql(@Args('id', { type: () => Int }) id: number) {
  //   return this.routsGraphqlService.remove(id);
  // }
}
