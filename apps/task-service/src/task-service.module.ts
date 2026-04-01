import { Module } from '@nestjs/common';
import { TaskServiceService } from './task-service.service';

@Module({
  providers: [TaskServiceService],
})
export class TaskServiceModule {}
