import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class TaskServiceResolver {
    @Query(()=> String)
    healthCheckTask(): string {
        return 'Task Service is up and running!';
    }
}
