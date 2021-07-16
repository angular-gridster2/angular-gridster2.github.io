import { Component, ChangeDetectorRef } from '@angular/core';
import { togglePwdUtil } from '../../shared/utils/toggle-pwd.util';
import { Router } from '@angular/router';


@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
    active = false;
    type = 'email';
    avatarURL: any;

    constructor(
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) {
        this.type = localStorage.getItem('login_type')
    }

    createdPwd() {
        this.type = 'email';
        localStorage.setItem('login_type', this.type);
        this.router.navigateByUrl('/profile');
        console.log(this.type);

    }
    changeTypePassword() {

        this.active = !this.active;
        console.log("Aaaaaaaaaa");

        togglePwdUtil('.pwd-profile');
        console.log(togglePwdUtil);
    }

    ngOnInit() {
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }

    // Save(){
    //     this.router.navigateByUrl('/profile');
    //     console.log('demo');
    // }

    changeAvatar(files) {
        if (files.length === 0) {
            return;
        }

        const mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            console.log("Only images are supported.");
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.avatarURL = reader.result;
            this.changeDetectorRef.detectChanges();
        };
    }
}
