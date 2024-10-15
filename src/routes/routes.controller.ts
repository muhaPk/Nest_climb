import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get() // '' - root path, '/name' - root path/name
  getRoutes() {
    return this.routesService.getRoutes();
  }


  @Post()
  createRoute(@Body('title') title: string, @Body('content') content: string) {
    return this.routesService.createRoute(title, content)
  }

}

