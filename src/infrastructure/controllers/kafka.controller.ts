import { Body, Controller, Post } from '@nestjs/common';
import { KafkaWriterUseCase } from '../../application/use-cases/kafka-writer-usecase';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('/kafka')
export class KafkaController {
  constructor(private readonly useCase: KafkaWriterUseCase) {}

  @Post()
  async handleRequest(@Body() data: any) {
    // El topico deberia estar en un evento de dominio
    await this.useCase.execute(`ms.nest.topic.in-${data.topicNumber}`, data);
    return { success: true };
  }

  @EventPattern('ms.nest.topic.in-1')
  async handleTopic1Messages(@Payload() message: any) {
    console.log('Mensajes del tópico 1:', message);
    // Procesar los mensajes del tópico 1
  }

  @EventPattern('ms.nest.topic.in-2')
  async handleTopic2Messages(@Payload() message: any) {
    console.log('Mensajes del tópico 2:', message);
    // Procesar los mensajes del tópico 2
  }
}
