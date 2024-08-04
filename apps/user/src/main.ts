import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(UserModule);
  // console.log("Port is ", 3002)
  // await app.listen(3002);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [
          // 'amqps://mucelfeh:hnJo_5LIEw03cikG75MksqMsi7s_YnxG@beaver.rmq.cloudamqp.com/mucelfeh',
          'amqp://localhost:5672/',
        ],
        queue: 'user_queue',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  console.log('Microservice is listening... ');
  await app.listen();
}
bootstrap();
