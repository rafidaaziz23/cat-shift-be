import { Test, TestingModule } from '@nestjs/testing';
import { TaskServiceResolver } from './task-service.resolver';

describe('TaskServiceResolver', () => {
  let resolver: TaskServiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaskServiceResolver],
    }).compile();

    resolver = module.get<TaskServiceResolver>(TaskServiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

    it('should return health check message', () => {
    expect(resolver.healthCheckTask()).toBe('Task Service is up and running!');
  });
});
