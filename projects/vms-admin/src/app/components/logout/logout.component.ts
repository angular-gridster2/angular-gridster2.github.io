import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { Router } from '@angular/router';
import { WidgetsService } from 'projects/widgets/src/public-api';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router, 
    private widgetsService: WidgetsService) {
  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.widgetsService.clearAll();
    this.router.navigate(['login']);
  }

}
