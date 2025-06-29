import { Component } from '@angular/core';
import { ModalService } from './update-modal/user-update-modal.service';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  constructor(private modalService: ModalService) { }

  openModal() {
    const modal = this.modalService.openModal();
    modal.result.then(
      (result) => {
        console.log(result);
      }
    );
  }
}
