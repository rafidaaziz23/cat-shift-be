import { Module } from '@nestjs/common';
import { ProjectServiceService } from './project-service.service';

@Module({
  providers: [ProjectServiceService],
})
export class ProjectServiceModule {}
