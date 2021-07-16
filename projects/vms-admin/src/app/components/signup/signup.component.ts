import {
  Component,
  OnInit,
  ChangeDetectorRef,
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
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  timeOTP: number = 60;
  isBack = false;
  emailInvalid = true;
  otpInvalid = false;
  invalidLogin = false;
  form1 = true;
  form2 = false;
  form3 = false;
  form4 = false;
  passActive = false;
  passActived = false;
  interval;
  inputSelected: any = null;
  formEmail: FormGroup;
  formOTP: FormGroup;
  formDetail: FormGroup;
  formCreate: FormGroup;
  constructor(
    private router: Router,
    private ref: ChangeDetectorRef,
    private form: FormBuilder
  ) { }
  ngOnInit() {
    this.formEmail = this.form.group({
      email: new FormControl('', [Validators.required]),
      isAccept: new FormControl(false, [Validators.requiredTrue]),
    });

    this.formOTP = this.form.group({
      code1: new FormControl('', [Validators.required]),
      code2: new FormControl('', [Validators.required]),
      code3: new FormControl('', [Validators.required]),
      code4: new FormControl('', [Validators.required]),
      code5: new FormControl('', [Validators.required]),
      code6: new FormControl('', [Validators.required]),
    });

    this.formDetail = this.form.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });

    // fix form4
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

  get f1() { return this.formEmail.controls; }

  checkEmail() {
    this.timeOTP = 60;
    this.form1 = false;
    this.form2 = true;
    this.interval = setInterval(() => {
      this.timeOTP = this.timeOTP - 1;
      if (this.timeOTP === 0) {
        clearInterval(this.interval);
      }
      this.ref.markForCheck();
    }, 1000);
  }
  checkOTP() {
    this.form2 = false;
    this.form3 = true;
    // this.form3 = true;
    clearInterval(this.interval);
  }
  backStep(ele) {
    if (ele == 2) {
      this.form1 = true;
      this.form2 = false;
      this.form3 = false;
      return;
    } else if (ele == 3) {
      this.form1 = false;
      this.form2 = true;
      this.form3 = false;
      return;
    }
  }

  // tiennx
  resetPwd() {
    this.form4 = false;
    this.form3 = true;
    clearInterval(this.interval);
  }
  // togglePwdgedis(event) {
  //   console.log(event.target);

  //   this.passActived = !this.passActived;
  //   const PWDN = document.querySelectorAll('.rsPass');
  //   PWDN.forEach((items) => {
  //     if (this.passActived == true) {
  //       items.setAttribute('type', 'text');
  //     } else {
  //       items.setAttribute('type', 'password');
  //     }
  //   });
  // }

  togglePwdgedis(event) {
    console.log(event.target);

    this.passActived = !this.passActived;
    const PWDN = document.querySelectorAll('.rsPass');
    PWDN.forEach((items) => {
      if (this.passActived == true) {
        items.setAttribute('type', 'text');
      } else {
        items.setAttribute('type', 'password');
      }
    });
  }

  togglePwd(event) {
    console.log(event.target);

    this.passActive = !this.passActive;
    const PWD = document.querySelectorAll('.input-password');
    PWD.forEach((item) => {
      if (this.passActive == true) {
        item.setAttribute('type', 'text');
      } else {
        item.setAttribute('type', 'password');
      }
    });
  }
  // end tiennx

  focusItem(event, nextFieldID) {
    const value = event.target.value;
    const reg = new RegExp('^[0-9]$');
    if (reg.test(value) && nextFieldID !== null) {
      document.getElementById(nextFieldID).focus();
    } else {
      return false;
    }
  }

  signUpDone() {
    localStorage.setItem('login_type', 'email')
    this.router.navigate(['login']);
  }

  // loginWithAIS() {
  //   localStorage.setItem('login_type', 'ais')
  //   this.router.navigate(['create-password']);
  // }
}
