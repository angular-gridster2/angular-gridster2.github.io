import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent implements OnInit {
  public confirmDislay = false;
  public deleteDislay = false;

  @Output() public submit = new EventEmitter();
  @Output() public cancel = new EventEmitter();

  public modalRef: BsModalRef;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.confirmDislay = true;
    this.deleteDislay = false;
  }

  hide(): void {
    this.cancel.emit();
    this.confirmDislay = false;
  }

  confirm(): void {
    this.confirmDislay = false;
    this.deleteDislay = true;
  }

  onSubmit(): void {
    this.submit.emit();
    this.deleteDislay = false;
  }

}
