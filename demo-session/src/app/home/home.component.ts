import { Component } from '@angular/core';
import {LoadingComponent} from "../components/loader/loader.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    LoadingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {

}
