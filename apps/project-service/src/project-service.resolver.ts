import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class ProjectServiceResolver {
  @Query(() => String)
  healthCheckProject(): string {
    return 'Project Service is up and running!';
  }
}