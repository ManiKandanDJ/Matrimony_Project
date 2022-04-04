import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.page.html',
  styleUrls: ['./profile-info.page.scss'],
})
export class ProfileInfoPage implements OnInit {


  profileInfoDetails: any[] = [];

  slideOpts = {
    centeredSlides: true,
    speed: 400,
    loop: true,
    slidesPerView: Math.floor(window.innerWidth / 298),
  };

  imgIndex = 1;
  totalImgCount = 1;

  constructor(private activateRoute: ActivatedRoute, private global: GlobalService, private router: Router) { 

    this.activateRoute.queryParams.subscribe(params => {

      if(params && params.profileId) {
        let profile = this.global.getProfileInfoDetails();
        console.log("Profile", profile);
        this.profileInfoDetails = profile.filter((profile) => profile.profileId == params.profileId)[0];
        console.log("this.profileInfoDetails", this.profileInfoDetails);
      }

    })
  }

  ngOnInit() {

  }
  
  goback() {
    this.router.navigate(["/matchprofile"]);
  }

}
