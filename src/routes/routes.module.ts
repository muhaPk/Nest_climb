import { Module } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from 'src/prisma.service'
import { join } from 'path';
import { RoutsGraphqlResolver } from '../routs-graphql/routs-graphql.resolver';


@Module({

  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true, 
    }),
  ],

  controllers: [RoutesController],
  providers: [RoutesService, PrismaService, RoutsGraphqlResolver],
  exports: [RoutesService],
})
export class RoutesModule {}
