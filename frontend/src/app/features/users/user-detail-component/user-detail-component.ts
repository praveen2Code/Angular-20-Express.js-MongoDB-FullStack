import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared-module';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user-service';

@Component({
  selector: 'app-user-detail-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './user-detail-component.html',
  styleUrls: ['./user-detail-component.scss'],
})
export class UserDetailComponent {
  user: User | null = null;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadUser(id);
    }
  }

  loadUser(id: string): void {
    this.userService.getUserById(id).subscribe({
      next: (user) => {
        this.user = user;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading user:', error);
        this.isLoading = false;
        this.router.navigate(['/users']);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }

  editUser(): void {
    if (this.user?._id) {
      this.router.navigate(['/users/edit', this.user._id]);
    }
  }

}