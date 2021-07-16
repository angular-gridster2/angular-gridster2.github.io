import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-otp',
  templateUrl: './check-otp.component.html',
  styleUrls: ['./check-otp.component.scss'],
})
export class CheckOtpComponent implements OnInit {
  isButton = false;
  timeOTP: number = 60;
  interval;
  formOTP: FormGroup;
  constructor(
    private router: Router,
    private form: FormBuilder,
    private ref: ChangeDetectorRef
  ) {
  }
  ngOnInit() {
    this.countdown();
    this.formOTP = this.form.group({
      code1: new FormControl('', [Validators.required]),
      code2: new FormControl('', [Validators.required]),
      code3: new FormControl('', [Validators.required]),
      code4: new FormControl('', [Validators.required]),
      code5: new FormControl('', [Validators.required]),
      code6: new FormControl('', [Validators.required]),
    });
  }

  checkOTP() {
    this.router.navigate(['/reset']);
    clearInterval(this.interval);
  }

  backStep() {
    this.router.navigate(['login'], { queryParams: { type: 'password' } });
  }

  countdown() {
    this.timeOTP = 60;
    this.interval = setInterval(() => {
      this.timeOTP = this.timeOTP - 1;
      if (this.timeOTP === 0) {
        clearInterval(this.interval);
      }
      this.ref.markForCheck();
    }, 1000);
  }

  focusItem(event, nextFieldID) {
    const value = event.target.value;
    const reg = new RegExp('^[0-9]$');
    if (reg.test(value) && nextFieldID !== null) {
      document.getElementById(nextFieldID).focus();
    } else {
      return false;
    }
  }

}
