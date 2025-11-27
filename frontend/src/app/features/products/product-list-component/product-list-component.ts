import { Component, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { Router, RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../../core/models/product';
import { ProductService } from '../../../core/services/product-service';

@Component({
  selector: 'app-product-list-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.scss'],
})
export class ProductListComponent {
  displayedColumns: string[] = ['name', 'category', 'price', 'stock', 'isAvailable', 'actions'];
  dataSource: MatTableDataSource<Product>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private productService: ProductService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<Product>([]);
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.dataSource.data = products;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: (error) => {
        this.showMessage('Error loading products: ' + error.message, 'error');
        this.isLoading = false;
      }
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  viewProduct(id: string): void {
    this.router.navigate(['/products', id]);
  }

  editProduct(id: string): void {
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: string, name: string): void {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.showMessage('Product deleted successfully', 'success');
          this.loadProducts();
        },
        error: (error) => {
          this.showMessage('Error deleting product: ' + error.message, 'error');
        }
      });
    }
  }

  addProduct(): void {
    this.router.navigate(['/products/new']);
  }

  private showMessage(message: string, type: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }
}