import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-modal.html'
})
export class ModalComponent {
  constructor(public activeModal: NgbActiveModal) { }
}
