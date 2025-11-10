import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  getAll() {
    return this.service.findAll();
  }

  @Post()
  add(@Body() product) {
    return this.service.create(product);
  }
}
