import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-matchprofile',
  templateUrl: './matchprofile.page.html',
  styleUrls: ['./matchprofile.page.scss'],
})
export class MatchprofilePage implements OnInit {

  profileInfo: any = [];

  constructor(private global: GlobalService, private router: Router) {
  }

  async ngOnInit() {
    this.profileInfo = await this.global.getProfileInfoDetails()
  }

  profileInfoDetails(id: number) {
    this.router.navigate(["/profile-info"], { queryParams: { profileId: id } })
  }

}
