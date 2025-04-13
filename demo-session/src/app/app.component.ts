import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoadingComponent} from "./components/loader/loader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'demo-session';

}
