import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaWriterUseCase } from 'src/application/use-cases/kafka-writer-usecase';
import { KafkaPublisherAdapter } from '../adapters/kafka-publisher.adapter';
import { KafkaController } from '../controllers/kafka.controller';
import config from '../config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config.KAFKA.CLIENT_ID,
            brokers: [config.KAFKA.BROKER],
          },
          consumer: {
            groupId: config.KAFKA.GROUP_ID,
          },

        },
      },
    ]),
  ],
  controllers: [KafkaController],
  providers: [
    KafkaWriterUseCase,
    {
      provide: 'IMessagePublisher',
      useClass: KafkaPublisherAdapter,
    },
  ],
  exports: ['IMessagePublisher'],
})
export class KafkaModule {}
