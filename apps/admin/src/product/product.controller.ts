import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @Inject('USER_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Post()
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<Product> {
    // message queue로 메시지 보내는 로직
    console.log('send data', createProductDto);
    const message = this.client.emit('product_created', createProductDto);
    console.log(message);
    return createProductDto;
  }
}
