import { Component, OnInit, ViewChild } from '@angular/core';
import { SaveModalComponent } from '../../shared/components/save-modal/save-modal.component';
import { DeleteModalComponent } from '../../shared/components/delete-modal/delete-modal.component';
// import Swal from 'sweetalert2';
@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.scss'],
})
export class SiteDetail implements OnInit {
  @ViewChild('saveModal', { static: false }) saveModal: SaveModalComponent;
  @ViewChild('deleteModal', { static: false }) deleteModal: DeleteModalComponent;

  name = '{ProjectName}'

  constructor() { }

  edit_version: boolean = false;

  editMode(){
    this.edit_version = !this.edit_version;
  }

  ngOnInit() { }
  // save(){
  //   Swal.fire({
  //     width:'400',
  //     title:'Saved',
  //     text: 'Your changes are saved',

  //     confirmButtonColor: '#0000e8',
  //     confirmButtonText: 'Done',
  //     customClass: {
  //       container:'swal2-show',
  //     //   header: 'swal2-header',
  //     //   title: 'swal2-content',
  //     //   confirmButton: 'swal2-actions',

  //     }
  //   });
  // };
  // delete(){
  //   Swal.fire({

  //     title:'Delete',
  //     text: 'Do you want to delete This website?',


  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Delete',

  //   }).then((result) => {
  //     if (result.value) {
  //       Swal.fire(
  //         'Success',
  //         'Your website was deleted.',

  //       )
  //     }
  //   })
  // }
}
