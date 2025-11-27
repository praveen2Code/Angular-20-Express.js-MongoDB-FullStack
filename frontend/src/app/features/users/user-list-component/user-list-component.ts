import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { Router, RouterModule } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-user-list-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './user-list-component.html',
  styleUrls: ['./user-list-component.scss'],
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'age', 'phone', 'isActive', 'actions'];
  dataSource: MatTableDataSource<User>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.dataSource = new MatTableDataSource<User>([]);
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.dataSource.data = users;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.isLoading = false;
      },
      error: (error) => {
        this.showMessage('Error loading users: ' + error.message, 'error');
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

  viewUser(id: string): void {
    this.router.navigate(['/users', id]);
  }

  editUser(id: string): void {
    this.router.navigate(['/users/edit', id]);
  }

  deleteUser(id: string, name: string): void {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      this.userService.deleteUser(id).subscribe({
        next: () => {
          this.showMessage('User deleted successfully', 'success');
          this.loadUsers();
        },
        error: (error) => {
          this.showMessage('Error deleting user: ' + error.message, 'error');
        }
      });
    }
  }

  addUser(): void {
    this.router.navigate(['/users/new']);
  }

  private showMessage(message: string, type: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }
}
