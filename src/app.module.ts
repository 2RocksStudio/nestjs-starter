import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import appConfig from './config/app.config';
import * as Joi from 'joi';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TestModule } from './module/test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig],
      validationSchema: Joi.object({
        ENV: Joi.string().required(),
        SERVICE_NAME: Joi.string().required(),
        PORT: Joi.string().required(),
        SWAGGER_PATH: Joi.string().required(),
      }),
    }),
    TestModule,
  ],
  controllers: [],
  providers: [Logger],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('/');
  }
}
