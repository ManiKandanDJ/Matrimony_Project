import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router, private rest: RestService) {

  }

  ngOnInit() {
    this.getProfileInfo();
  }

  getProfileInfo() {
    this.rest.getProfileInfo();
  }
  

  naviToPage(path: String) {
    this.router.navigate([path]);
  }

}
