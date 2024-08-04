import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @EventPattern('product_created')
  async createProduct(createProductDto: CreateProductDto) {
    console.log('listener data ', createProductDto);
  }
}
