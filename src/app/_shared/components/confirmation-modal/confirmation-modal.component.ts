import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationModalResultEnum } from '@shared/enums';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss'],
})
export class ConfirmationModalComponent {
  @Input()
  title: string = 'Confirmacion';
  @Input()
  message: string = 'Confirma que desea continuar?';

  @Output()
  result = new EventEmitter<ConfirmationModalResultEnum>();

  constructor(private modalService: NgbActiveModal) {}

  yesResponse(): void {
    //this.result.emit(ConfirmationModalResultEnum.Yes);
    this.modalService.close(ConfirmationModalResultEnum.Yes);
  }
  noResponse(): void {
    this.modalService.close(ConfirmationModalResultEnum.No);
  }
}
