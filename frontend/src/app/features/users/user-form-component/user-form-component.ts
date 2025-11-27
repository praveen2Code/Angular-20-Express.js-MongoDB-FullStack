import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-user-form-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './user-form-component.html',
  styleUrls: ['./user-form-component.scss'],
})
export class UserFormComponent {
  userForm: FormGroup;
  isEditMode = false;
  userId: string | null = null;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.min(0), Validators.max(150)]],
      phone: [''],
      address: [''],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.isEditMode = true;
      this.loadUser(this.userId);
    }
  }

  loadUser(id: string): void {
    this.isLoading = true;
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.userForm.patchValue(user);
        this.isLoading = false;
      },
      error: (error) => {
        this.showMessage('Error loading user: ' + error.message, 'error');
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.isLoading = true;
      const userData: User = this.userForm.value;

      if (this.isEditMode && this.userId) {
        this.userService.updateUser(this.userId, userData).subscribe({
          next: () => {
            this.showMessage('User updated successfully', 'success');
            this.router.navigate(['/users']);
          },
          error: (error) => {
            this.showMessage('Error updating user: ' + error.message, 'error');
            this.isLoading = false;
          }
        });
      } else {
        this.userService.createUser(userData).subscribe({
          next: () => {
            this.showMessage('User created successfully', 'success');
            this.router.navigate(['/users']);
          },
          error: (error) => {
            this.showMessage('Error creating user: ' + error.message, 'error');
            this.isLoading = false;
          }
        });
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/users']);
  }

  private showMessage(message: string, type: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: type === 'success' ? 'success-snackbar' : 'error-snackbar'
    });
  }
}

