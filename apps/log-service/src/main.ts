import { NestFactory } from '@nestjs/core';
import { LogServiceModule } from './log-service.module';

async function bootstrap() {
  const app = await NestFactory.create(LogServiceModule);
  await app.listen(3000);
}
bootstrap();
