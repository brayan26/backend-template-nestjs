import { Module } from '@nestjs/common';
import { KafkaModule } from './infrastructure/modules/kafka.module';

@Module({
  imports: [KafkaModule],
})
export class AppModule {}
