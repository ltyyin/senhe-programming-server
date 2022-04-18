import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { VerifyModule } from 'src/common/verify/verify.module';

@Module({
  imports: [VerifyModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
