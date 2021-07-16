import {
  Component,
  OnInit,
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailInvalid = false;
  invalidLogin = false;
  passActive = false;
  form1 = false;
  form2 = true;

  public sign1Form: FormGroup;
  public sign2Form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.sign1Form = new FormGroup({
      email: new FormControl('', [Validators.required])
    });
    this.sign2Form = new FormGroup({
      password: new FormControl('', [Validators.required]),
    });
  }

  // Controls
  get f1() { return this.sign1Form.controls; }
  get f2() { return this.sign2Form.controls; }

  ngOnInit() {
    const params = this.route.snapshot.queryParamMap.get('type');
    this.checkStep(params);
  }

  checkEmail() {
    this.form1 = !this.form1;
    this.form2 = !this.form2;
  }

  backStep() {
    this.form1 = !this.form1;
    this.form2 = !this.form2;
  }

  signup() {
    this.router.navigate(['signup']);
  }

  togglePwd() {
    this.passActive = !this.passActive;
    const PWD = document.querySelector('.inp-pwd');
    if (this.passActive == true) {
      PWD.setAttribute('type', 'text');
    } else {
      PWD.setAttribute('type', 'password');
    }
  }

  forget() {
    this.router.navigate(['check-otp'])
  }

  checkStep(params: any) {
    switch (params && params.toString().trim()) {
      case 'password':
        this.emailInvalid = true;
        break;

      default:
        this.emailInvalid = false;
    }
  }

  checkLogin() {
    localStorage.setItem('login_type', 'email')
    this.router.navigate(['select-template']);
  }

  loginWithAIS() {
    this.form1 = !this.form1;
    this.form2 = !this.form2;
    localStorage.setItem('login_type', 'ais')
    this.router.navigate(['mysite']);
  }
}
