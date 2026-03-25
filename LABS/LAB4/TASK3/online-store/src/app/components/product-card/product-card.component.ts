import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  @Output() toggleFavorite = new EventEmitter<number>();

onToggleFavorite(): void {
  this.toggleFavorite.emit(this.product.id);
}
}
