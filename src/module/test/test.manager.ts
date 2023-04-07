import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { TestService } from './test.service';

@Injectable()
export class TestManager {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,
    private readonly testService: TestService,
  ) {
    this.logger = new Logger('TestManager');
  }
  async testGet(id: string): Promise<string> {
    this.logger.debug(`testGet() ${id}`);
    return this.testService.testGet(id);
  }
}
