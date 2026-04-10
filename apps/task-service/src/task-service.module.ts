import { Module } from '@nestjs/common';
import { TaskServiceService } from './task-service.service';
import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { TaskServiceResolver } from './task-service.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
    }),],
  providers: [TaskServiceService, TaskServiceResolver],
})
export class TaskServiceModule { }
