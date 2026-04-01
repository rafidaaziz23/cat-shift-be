import { Controller, Get } from '@nestjs/common';
import { LogServiceService } from './log-service.service';

@Controller()
export class LogServiceController {
  constructor(private readonly logServiceService: LogServiceService) {}

  @Get()
  getHello(): string {
    return this.logServiceService.getHello();
  }
}
