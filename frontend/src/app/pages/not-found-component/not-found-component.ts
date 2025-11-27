import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared-module';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found-component',
  standalone: true,
  imports: [SharedModule, RouterModule],
  templateUrl: './not-found-component.html',
  styleUrls: ['./not-found-component.scss'],
})
export class NotFoundComponent {
  router = inject(Router);

  goHome() {
    this.router.navigate(['/']);
  }

}
