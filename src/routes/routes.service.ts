import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoutesService {
    constructor(private readonly prisma:PrismaService){}


    getRoutes() {
        return this.prisma.routes.findMany()
    }


    createRoute(title: string, content: string) {
        return this.prisma.routes.create({
            data: {
                title,
                content
            }
        })
    }


}
