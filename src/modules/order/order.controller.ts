import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';

@Controller('order')
@ApiTags('交易订单模块')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  @ApiOperation({ summary: '我的订单' })
  public getTradeOrder() {
    return this.orderService.myOrder().data;
  }

  @Get('cancel/:id')
  @ApiOperation({ summary: '取消订单' })
  public cancelTradeOrder(@Param('id') id: string) {
    return {
      code: 20000,
      message: '订单取消成功！',
    };
  }

  @Delete('delete/:id')
  @ApiOperation({ summary: '删除订单' })
  public delTradeOrder(@Param('id') id: string) {
    return {
      code: 20000,
      message: '订单删除成功！',
    };
  }
}
