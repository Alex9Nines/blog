import { environment } from '../environments/environment';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './app.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
	imports: [
		TypeOrmModule.forRoot({
			...environment.connection,
		}),
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			typePaths: ['./**/*.graphql'],
			context: ({ req }) => ({ req }),
			playground: true,
		}),
	],
	controllers: [AppController],
	providers: [AppResolver],
})
export class AppModule {}
