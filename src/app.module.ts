import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { LoggerMiddleware } from './conseption/middleware'
import { UsersController } from './users/users.controller'
import { UsersModule } from './users/users.module'
import { UsersService } from './users/users.service'

@Module({
	imports: [UsersModule],
	controllers: [UsersController],
	providers: [UsersService],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(LoggerMiddleware).forRoutes('*')
	}
}
