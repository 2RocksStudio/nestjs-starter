import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';

@Injectable()
export class TestService {
  constructor(@Inject(Logger) private readonly logger: LoggerService) {
    this.logger = new Logger('TestService');
  }

  async testGet(id: string): Promise<string> {
    this.logger.debug(`testGet() ${id}`);
    return id;
  }
}
