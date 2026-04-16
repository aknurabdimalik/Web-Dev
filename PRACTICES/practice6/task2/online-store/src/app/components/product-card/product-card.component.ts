import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() favoriteChanged = new EventEmitter<void>();

  mainImage!: string;
  currentIndex = 0;
  isFavorite = false;
  ngOnInit() {
  this.mainImage = this.product.image;

  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  this.isFavorite = favorites.includes(this.product.id);
  }
  toggleFavorite() {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');


  if (favorites.includes(this.product.id)) {
    favorites = favorites.filter((id: number) => id !== this.product.id);
    this.isFavorite = false;
  } else {
    favorites.push(this.product.id);
    this.isFavorite = true;
  }


  localStorage.setItem('favorites', JSON.stringify(favorites));
  this.favoriteChanged.emit();
  }


  selectImage(index: number) {
    this.currentIndex = index;
    this.mainImage = this.product.images[index] || this.product.image;
  }

  stars(): boolean[] {
    const fullStars = Math.round(this.product.rating);
    return Array(5).fill(false).map((_, i) => i < fullStars);
  }
  
  like() {
      this.product.likes++;
    }
  

  delete() {
    if (confirm(`Are you sure delete ${this.product.name}?`)){
    this.deleteProduct.emit(this.product);
    }
  }
  encode(str: string) {
  
    return encodeURIComponent(str);
  }
}