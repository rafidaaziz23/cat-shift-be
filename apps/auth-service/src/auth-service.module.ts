import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { AuthServiceService } from './auth-service.service'; 
import { AuthServiceResolver } from './auth-service.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
    federation: 2,
  },
    }),
  ],
  providers: [AuthServiceService,AuthServiceResolver],
})
export class AuthServiceModule {}