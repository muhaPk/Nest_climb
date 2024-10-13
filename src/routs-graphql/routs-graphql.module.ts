import { Module } from '@nestjs/common';
import { RoutsGraphqlResolver } from './routs-graphql.resolver';
import { RoutesService } from 'src/routes/routes.service'
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [RoutsGraphqlResolver, RoutesService, PrismaService],
})
export class RoutsGraphqlModule {}
