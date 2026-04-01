import { Test, TestingModule } from '@nestjs/testing';
import { ProjectServiceResolver } from './project-service.resolver';

describe('ProjectServiceResolver', () => {
  let resolver: ProjectServiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectServiceResolver],
    }).compile();

    resolver = module.get<ProjectServiceResolver>(ProjectServiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return health check message', () => {
    expect(resolver.healthCheckProject()).toBe('Project Service is up and running!');
  });
});
