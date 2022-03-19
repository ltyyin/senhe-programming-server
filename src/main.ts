import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logger = new Logger('main.ts');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 开启全局验证管道
  app.useGlobalPipes(new ValidationPipe());

  // 开启 CORS
  app.enableCors();

  // 配置 swagger
  const config = new DocumentBuilder()
    .setTitle('森和学习平台')
    .setDescription('前后端分离，为前端提供API接口')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api-docs', app, document);

  // 监听端口号
  const PORT = process.env.SERVER_PORT;
  await app.listen(PORT);
  logger.log(`listen in http://localhost:${PORT}/api-docs`);
}
bootstrap();
