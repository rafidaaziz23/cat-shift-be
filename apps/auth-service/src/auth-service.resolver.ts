import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class AuthServiceResolver {
  @Query(() => String)
  healthCheckAuth(): string {
    return 'Auth Service is up and running!';
  }
}