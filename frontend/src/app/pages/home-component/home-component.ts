import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared-module';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],
})
export class HomeComponent {
  router = inject(Router);
  features = [
    {
      title: 'User Management',
      description: 'Complete CRUD operations for managing users with advanced features',
      icon: 'people',
      route: '/users',
      color: 'primary'
    },
    {
      title: 'Product Management',
      description: 'Manage your product inventory with full CRUD functionality',
      icon: 'shopping_cart',
      route: '/products',
      color: 'accent'
    }
  ];

  // constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

}
