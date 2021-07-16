import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.scss']
})
export class SaveModalComponent implements OnInit {
  public deleteDislay = false;

  @Output() public submit = new EventEmitter();
  @Output() public cancel = new EventEmitter();

  public modalRef: BsModalRef;

  constructor() { }

  ngOnInit(): void {
  }

  show(): void {
    this.deleteDislay = true;
  }

  onSubmit(): void {
    this.submit.emit();
    this.deleteDislay = false;
  }

}
