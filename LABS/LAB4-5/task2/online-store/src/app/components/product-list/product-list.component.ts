import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() selectedCategory: string = '';

  categories: string[] = ['Smartphones', 'Furniture', 'Laptops', 'Home appliances'];

  get filteredProducts(): Product[] {
    if (!this.selectedCategory) return this.products;
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}