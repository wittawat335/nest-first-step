import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private readonly products = [
    {
      id: 1,
      title: 'Essence Mascara Lash Princess',
    },
    {
      id: 2,
      title: 'Essence Mascara Lash Princess',
    },
  ];

  findAll() {
    return this.products;
  }

  create(product) {
    this.products.push(product);
    return this.products;
  }
}
