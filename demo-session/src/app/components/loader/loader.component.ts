import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from "./loading.service";

@Component({
    selector: 'app-loading',
    imports: [CommonModule, MatProgressSpinnerModule],
    template: `
    <div class="loading-overlay" *ngIf="(loadingService.loading$ | async)">
      <mat-progress-spinner
        diameter="50"
        strokeWidth="5"
        mode="indeterminate"
        color="primary">
      </mat-progress-spinner>
    </div>
  `,
    styles: [`
    .loading-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
  `]
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) {}
}
