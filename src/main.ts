import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import config from './infrastructure/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración del microservicio Kafka
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [config.KAFKA.BROKER],
      },
      consumer: {
        groupId: config.KAFKA.GROUP_ID,
      },
    },
  });

  await app.startAllMicroservices(); // Inicia todos los microservicios
  await app.listen(config.PORT); // Inicia el servidor HTTP
}

bootstrap();
