import { Component } from '@angular/core';
import {LoadingComponent} from "../components/loader/loader.component";

@Component({
    selector: 'app-home',
    imports: [
        LoadingComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {

}
