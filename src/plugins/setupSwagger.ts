import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export default function (app: INestApplication) {
  const options = new DocumentBuilder()
    .setTitle('Nest博客api')
    .setDescription('使用nest编写的博客api')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);
}
