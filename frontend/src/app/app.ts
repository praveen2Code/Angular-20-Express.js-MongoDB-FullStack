import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header-component/header-component';
import { FooterComponent } from './shared/footer-component/footer-component';
import { SharedModule } from './shared/shared-module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SharedModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  // protected readonly title = signal('frontend');
  title = 'FullStack Application';
}
