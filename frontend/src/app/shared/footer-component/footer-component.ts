import { Component } from '@angular/core';
import { SharedModule } from '../shared-module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './footer-component.html',
  styleUrls: ['./footer-component.scss'],
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

}
