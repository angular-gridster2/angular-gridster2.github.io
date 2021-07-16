import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-unpublished-modal',
  templateUrl: './unpublished-modal.component.html',
  styleUrls: ['./unpublished-modal.component.scss']
})
export class UnpublishedModalComponent implements OnInit {
  public confirmDislay = false;

  @Output() public submit = new EventEmitter();
  @Output() public cancel = new EventEmitter();

  public modalRef: BsModalRef;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.confirmDislay = true;
  }

  hide(): void {
    this.cancel.emit();
    this.confirmDislay = false;
  }

  onSubmit(): void {
    this.submit.emit();
    this.confirmDislay = false;
  }

}
