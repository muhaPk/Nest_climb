import { NestFactory } from '@nestjs/core';
import { RoutesModule } from './routes/routes.module';

async function bootstrap() {
  const app = await NestFactory.create(RoutesModule);
  app.setGlobalPrefix('api');
  await app.listen(4200);
}
bootstrap();
