import { Component } from '@angular/core';
import { SharedModule } from '../shared-module';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SharedModule, RouterModule, MatToolbarModule , MatButtonModule, MatIconModule],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.scss'],
})
export class HeaderComponent {
  menuItems = [
    {path: '/', label: 'Home', icon: 'home' },
    {path: '/users', label: 'Users', icon: 'people' },
    {path: '/products', label: 'Products', icon: 'shopping_cart' },
  ];

}
