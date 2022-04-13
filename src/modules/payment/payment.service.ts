import { Injectable } from '@nestjs/common';
import { mock } from 'mockjs';

@Injectable()
export class PaymentService {
  public wxpay() {
    return mock({
      data: {
        // 生成签名后的订单信息
        sign: '9FC33658D87B783FD3C8486D5962BB9D', //签名
        noncestr: 'ek0dkmtei28u70a1', //随机字符串，不长于32位
        appId: 'wx0411fa6a39d61297', // 应用id
        package: 'Sign=WXPay', //扩展字符串,填写固定值Sign=WXPay
        partnerid: '1230636401', //商户号
        prepayid: 'wx08164636160028c15b72ab9b5fe67c0000', //预支付交易会话ID
        timestamp: '1610095596', //时间戳
      },
    });
  }

  public alipay() {
    return mock({
      data: '@word(30)',
    });
  }
}
