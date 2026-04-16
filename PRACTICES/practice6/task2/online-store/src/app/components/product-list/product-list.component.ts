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
  showOnlyFavorites = false;
  favoritesCount = 0;
  updateFavoritesCount() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  this.favoritesCount = favorites.length;
  }
  ngOnInit() {
  this.updateFavoritesCount();

  }

  toggleFavorites() {
  this.showOnlyFavorites = !this.showOnlyFavorites;
  this.updateFavoritesCount();
  }

  categories: string[] = ['Smartphones', 'Furniture', 'Laptops', 'Home appliances'];

  get filteredProducts(): Product[] {

  let result = this.products;

  if (this.selectedCategory) {
    result = result.filter(p => p.category === this.selectedCategory);
  }

  if (this.showOnlyFavorites) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    result = result.filter(p => favorites.includes(p.id));
  }

  return result;
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}