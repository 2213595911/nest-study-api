import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import setupPlguins from './plugins';
import {logger} from './common/middleware/logger.middleware'
import {HttpExceptionFilter} from "./common/filter/http-exception.filter";
import {TransformInterceptor} from "./common/interceptor/transform.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  // 全局api前缀
  app.setGlobalPrefix('/api')
  // 全局中间件
  app.use(logger)
  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局守卫
  // app.useGlobalGuards(new RolesGuard())
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor())

  setupPlguins(app);
  await app.listen(3007);
}

bootstrap();
