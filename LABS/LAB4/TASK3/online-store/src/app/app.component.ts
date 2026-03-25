import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Product } from './models/product.model'; // Импортируй модель
import { ProductService } from './services/product.services'; // Импортируй сервис
import { ProductCardComponent } from './components/product-card/product-card.component'; // 1. Добавь этот импорт

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = []; // Объяви массив здесь!
  favorites: Product[] = [];
  

  constructor(private productService: ProductService) {}

  ngOnInit() {
    // Получаем данные из сервиса при загрузке
    this.products = this.productService.getProducts();
  }

 toggleFavorite(productId: number): void {
  const product = this.products.find(p => p.id === productId);
  if (product) {
    product.isFavorite = !product.isFavorite;
    // Это ключевая строка: она пересобирает список избранного каждый раз
    this.favorites = this.products.filter(p => p.isFavorite);
  }
}
}