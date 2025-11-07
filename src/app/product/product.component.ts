import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';  

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CapitalizePipe, TimeAgoPipe, TruncatePipe],
  templateUrl: './product.component.html'
})
export class ProductComponent {
  product = {
    name: 'macbook air',
    description: 'The MacBook Air is a lightweight, portable laptop with exceptional performance and battery life.',
    updated: new Date(Date.now() - 7200_000) // 2 hours ago
  };
}
