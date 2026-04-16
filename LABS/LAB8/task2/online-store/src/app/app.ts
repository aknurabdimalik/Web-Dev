import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [ProductListComponent],
})
export class App {
  selectedCategory: string = '';
  products: Product[] = [];
  
  selectCategory(category: string) {
    this.selectedCategory = category;
  }
}