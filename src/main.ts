import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import setupPlguins from './plugins';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});
  app.setGlobalPrefix('/api')
  setupPlguins(app);
  await app.listen(3007);
}

bootstrap();
