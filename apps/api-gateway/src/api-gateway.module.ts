import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      server: {
        playground: true, 
      },
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            { name: 'auth', url: 'http://localhost:3001/graphql' },
            { name: 'project', url: 'http://localhost:3002/graphql' },
            // { name: 'task', url: 'http://localhost:3003/graphql' },
            // { name: 'comment', url: 'http://localhost:3004/graphql' },
          ],
        }),
      },
    }),
  ],
  providers: [], 
})
export class ApiGatewayModule {}
