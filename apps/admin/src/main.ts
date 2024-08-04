import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  console.log("Port is ", 3001)

  app.setGlobalPrefix('api');

  await app.listen(3001);
}
bootstrap();
