import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PaymentService } from './payment.service';

@Controller('payment')
@ApiTags('支付模块')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('wxpay')
  @ApiOperation({ summary: '微信支付' })
  public wxpay(@Body() info) {
    return this.paymentService.wxpay().data;
  }

  @Post('alipay')
  @ApiOperation({ summary: '支付宝支付' })
  public alipay(@Body() info) {
    return this.paymentService.alipay().data;
  }
}
