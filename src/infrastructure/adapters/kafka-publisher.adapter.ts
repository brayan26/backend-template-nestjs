import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { IMessagePublisher } from '../../domain/ports/message-publisher.interface';

@Injectable()
export class KafkaPublisherAdapter implements IMessagePublisher {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async publish(topic: string, message: any): Promise<void> {
    this.kafkaClient.emit(topic, message);
  }
}
