import 'dotenv/config';

const env = (key: string) => {
  return process.env[key];
};

export default {
  PORT: env('PORT') ?? 3000,
  NODE_ENV: env('NODE_ENV') ?? 'dev',
  KAFKA: {
    CLIENT_ID: env('KAFKA_CLIENT_ID') ?? 'nest-kafka',
    BROKER: env('KAFKA_BROKER') ?? 'localhost:9092',
    GROUP_ID: env('KAFKA_GROUP_ID') ?? '',
    MAX_RETRIES: env('KAFKA_RETRIES') ?? '3',
  },
};