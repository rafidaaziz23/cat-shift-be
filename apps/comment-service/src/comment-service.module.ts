import { Module } from '@nestjs/common';
import { CommentServiceService } from './comment-service.service';

@Module({
  providers: [CommentServiceService],
})
export class CommentServiceModule {}
