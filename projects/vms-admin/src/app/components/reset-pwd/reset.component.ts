import {
  Component,
  OnInit,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmValidator } from '../../shared/utils/validator';
@Component({
  selector: 'app-reset-pwd',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
})
export class ResetPwdComponent implements OnInit {
  formReset: FormGroup;
  passActive = false;
  inputSelected: any = null;

  constructor(private router: Router, private form: FormBuilder) {
    this.formReset = this.form.group(
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
    this.router.navigate(['login'], { queryParams: { type: 'password' } });
  }

  backStep() {
    window.history.back();
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
