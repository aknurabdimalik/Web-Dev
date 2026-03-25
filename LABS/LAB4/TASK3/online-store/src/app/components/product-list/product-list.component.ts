import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,   // 👈 обязательно!
  imports: [CommonModule, ProductCardComponent],  // 👈 ВОТ ЭТО ГЛАВНОЕ
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  @Output() toggleFavorite = new EventEmitter<number>();

  onToggle(productId: number) {
    this.toggleFavorite.emit(productId);
  }
}