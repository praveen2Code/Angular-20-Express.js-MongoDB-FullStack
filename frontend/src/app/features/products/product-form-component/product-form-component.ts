import { Component, inject } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../../../core/services/product-service';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'app-product-form-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './product-form-component.html',
  styleUrls: ['./product-form-component.scss'],
})
export class ProductFormComponent {

  private fb= inject(FormBuilder);
  private productService = inject(ProductService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private snackBar = inject(MatSnackBar);

  productForm!: FormGroup;
  isEditMode = false;
  productId: string | null = null;
  isLoading = false;
  categories = ['Electronics', 'Clothing', 'Food', 'Books', 'Other'];

  constructor() {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      isAvailable: [true]
    });
  }

 ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    if (this.productId) {
      this.isEditMode = true;
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: string): void {
    this.isLoading = true;
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
        this.isLoading = false;
      },
      error: (error) => {
        this.showMessage('Error loading product: ' + error.message, 'error');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.isLoading = true;
      const productData: Product = this.productForm.value;

      if (this.isEditMode && this.productId) {
        this.productService.updateProduct(this.productId, productData).subscribe({
          next: () => {
            this.showMessage('Product updated successfully', 'success');
            this.router.navigate(['/products']);
          },
          error: (error) => {
            this.showMessage('Error updating product: ' + error.message, 'error');
            this.isLoading = false;
          }
        });
      } else {
        this.productService.createProduct(productData).subscribe({
          next: () => {
            this.showMessage('Product created successfully', 'success');
            this.router.navigate(['/products']);
          },
          error: (error) => {
            this.showMessage('Error creating product: ' + error.message, 'error');
            this.isLoading = false;
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }

  private showMessage(message: string, type: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }
}