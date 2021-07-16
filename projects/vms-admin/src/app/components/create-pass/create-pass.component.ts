import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmValidator } from '../../shared/utils/validator';

@Component({
  selector: 'app-create-pass',
  templateUrl: './create-pass.component.html',
  styleUrls: ['./create-pass.component.scss']
})
export class CreatePassComponent implements OnInit {

  formCreate: FormGroup;
  passActive = false;

  constructor(private router: Router, private form: FormBuilder) {
    this.formCreate = this.form.group(
      {
        newPassword: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required]),
      },
      {
        validators: ConfirmValidator('newPassword', 'confirmPassword'),
      }
    );
  }

  ngOnInit() { }

  resetPwd() {
    this.router.navigate(['profile']);
  }

  backStep() {
    this.router.navigate(['signup']);
  }

  togglePwd(event) {
    this.passActive = !this.passActive;
    const PWD = document.querySelectorAll('.rsPass');
    PWD.forEach((item) => {
      if (this.passActive == true) {
        item.setAttribute('type', 'text');
      } else {
        item.setAttribute('type', 'password');
      }
    });
  }
}
