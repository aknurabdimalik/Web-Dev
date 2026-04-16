import { Component, Input, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnChanges, OnInit {
  @Input() products: Product[] = []; 
  @Input() selectedCategory: string = '';
  
  http = inject(HttpClient);
  filteredProducts: Product[] = [];
  ngOnInit() {
    this.loadAllProducts();
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory']) {
      if (!this.selectedCategory) {
        this.loadAllProducts();
      } else {
        const categoryMap: any = {
          'Smartphones': 1,
          'Furniture': 2,
          'Laptops': 3,
          'Home appliances': 4
        };

        const categoryId = categoryMap[this.selectedCategory];

        if (categoryId) {
          this.http.get<Product[]>(`http://127.0.0.1:8000/api/categories/${categoryId}/products/`)
            .subscribe(data => this.filteredProducts = data);
        }
      }
    }
  }

  loadAllProducts() {
    this.http.get<Product[]>('http://127.0.0.1:8000/api/products/')
      .subscribe(data => this.filteredProducts = data);
  }

  deleteProduct(product: Product) {
    this.http.delete(`http://127.0.0.1:8000/api/products/${product.id}/delete/`)
      .subscribe(() => {
        this.filteredProducts = this.filteredProducts.filter(p => p.id !== product.id);
      });
  }
}