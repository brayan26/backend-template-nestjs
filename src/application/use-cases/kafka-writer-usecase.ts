import { Inject, Injectable } from '@nestjs/common';
import { IMessagePublisher } from '../../domain/ports/message-publisher.interface';

@Injectable()
export class KafkaWriterUseCase {
  constructor(
    @Inject('IMessagePublisher')
    private readonly messagePublisher: IMessagePublisher,
  ) {}

  async execute(topic: string, someData: any) {
    await this.messagePublisher.publish(topic, someData);
  }
}
