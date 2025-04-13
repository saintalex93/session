// components/loading/loading.component.ts
import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxLoadingModule} from 'ngx-loading';
import {LoadingService} from "./loading.service";

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, NgxLoadingModule],
  template: `
    <ngx-loading
      [show]="(loadingService.loading$ | async) || false"
      [config]="{
        fullScreenBackdrop: true,
        primaryColour: '#3f51b5',
        secondaryColour: '#3f51b5',
        tertiaryColour: '#3f51b5'
      }"></ngx-loading>
  `,
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {
  }
}
