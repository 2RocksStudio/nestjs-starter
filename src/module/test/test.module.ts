import { Logger, Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { TestService } from './test.service';
import { TestManager } from './test.manager';

@Module({
  controllers: [TestController],
  providers: [Logger, TestManager, TestService],
  exports: [TestService],
})
export class TestModule {}
