import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './update-modal.component';

@Injectable({ providedIn: 'root' })
export class ModalService {
  constructor(private modalService: NgbModal) {}

  openModal() {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
      size: 'lg'
    });
    return modalRef;
  }
}
