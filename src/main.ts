import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

const logger = new Logger('main.ts');
const PORT = process.env.SERVICE_PORT || 5000;
const HOST = process.env.HOST || 'localhost';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // 开启全局验证管道
  app.useGlobalPipes(new ValidationPipe());

  /* 开启全局路由前缀 */
  app.setGlobalPrefix('api');

  // 开启 CORS
  app.enableCors();

  // 开启静态文件托管
  // 第一个参数为服务器的静态地址，第二个参数为请求url的开头路径
  app.useStaticAssets(join(__dirname, '..', 'assets', 'images'), {
    prefix: '/images',
  });

  // 配置 swagger
  const config = new DocumentBuilder()
    .setTitle('森和编程')
    .setDescription('前后端分离，为前端提供API接口')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(PORT);
  logger.log(`listen in http://${HOST}:${PORT}/docs`);
}
bootstrap();
