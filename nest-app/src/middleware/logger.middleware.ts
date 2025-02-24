import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // 记录请求开始的时间
    const start = Date.now();

    // 在响应结束后，计算并打印请求的耗时
    res.on('finish', () => {
      const end = Date.now();
      const duration = end - start;
      console.log(`[${req.method}] ${req.originalUrl} - ${duration}ms`);
    });

    next();
  }
}
