import { Test, TestingModule } from '@nestjs/testing';
import { AuthServiceResolver } from './auth-service.resolver';

describe('AuthServiceResolver', () => {
  let resolver: AuthServiceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthServiceResolver],
    }).compile();

    resolver = module.get<AuthServiceResolver>(AuthServiceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should return health check message', () => {
    expect(resolver.healthCheckAuth()).toBe('Auth Service is up and running!');
  });
});