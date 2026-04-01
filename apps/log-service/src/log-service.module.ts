import { Module } from '@nestjs/common';
import { LogServiceService } from './log-service.service';

@Module({
  providers: [LogServiceService],
})
export class LogServiceModule {}
