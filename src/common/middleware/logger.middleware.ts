import {NextFunction, Request, Response} from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(`${req.path} - ${req.method}`)
//     next();
//   }
// }

// 功能性中间件
export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`${req.path}--${req.method}`)
  next()
}