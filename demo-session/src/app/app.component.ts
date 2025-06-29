import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { LoadingComponent } from "./components/loader/loader.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LoadingComponent, HeaderComponent],
  template: `
    <app-loading/>
    <app-header></app-header><div class="container-fluid"><router-outlet></router-outlet></div>
  `
})
export class AppComponent {
  title = 'Demo Session';
}
