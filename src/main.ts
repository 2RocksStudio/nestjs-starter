import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.enableVersioning({
    type: VersioningType.URI,
  });
  app.use(cookieParser());
  const configService: ConfigService = app.get(ConfigService); //Get Config Service
  const logger: Logger = app.get(Logger);
  logger.log(`[Staring] App Name : ${configService.get<string>('app.name')}`);
  logger.log(
    `[Staring] Port Listen : ${configService.get<number>('app.appPort')}`,
  );
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const config = new DocumentBuilder()
    .setTitle('Swagger')
    .setDescription('The API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(
    configService.get<string>('app.swaggerPath'),
    app,
    document,
  );
  await app.listen(configService.get<number>('app.appPort') || 9000);
}
bootstrap();
