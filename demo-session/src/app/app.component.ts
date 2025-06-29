import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {LoadingComponent} from "./components/loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoadingComponent],
  template: `
    <app-loading/>
    <div class="container-fluid"><router-outlet></router-outlet></div>
  `
})
export class AppComponent {
  title = 'Demo Session';
}
