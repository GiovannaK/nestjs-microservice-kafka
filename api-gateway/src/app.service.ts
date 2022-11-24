import { Injectable } from '@nestjs/common';
import { CreateOrderRequest } from './create-order-request.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createOrder(createOrderRequest: CreateOrderRequest) {
        
  }
}
