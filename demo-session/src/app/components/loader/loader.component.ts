import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingService } from "./loading.service";

@Component({
  selector: 'app-loading',
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loader.html',
  styleUrls: ['./loader.scss'],
})
export class LoadingComponent {
  constructor(public loadingService: LoadingService) { }
}
