import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product-service';

@Component({
  selector: 'app-product-detail-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './product-detail-component.html',
  styleUrls: ['./product-detail-component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadProduct(id);
    }
  }

  loadProduct(id: string): void {
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.product = product;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading product:', error);
        this.isLoading = false;
        this.router.navigate(['/products']);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  editProduct(): void {
    if (this.product?._id) {
      this.router.navigate(['/products/edit', this.product._id]);
    }
  }
}