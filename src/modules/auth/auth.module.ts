import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { VerifyModule } from 'src/common/verify/verify.module';

@Module({
  imports: [VerifyModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
