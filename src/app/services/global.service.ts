import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isToasting = false;

  constructor(private toastCtrl: ToastController) { }

  getProfileInfoDetails() {
    let profileInfo = localStorage.getItem('profileInfo');
    if (profileInfo !== undefined) {
      return JSON.parse(profileInfo);
    }
    return [];
  }


  successToast(message: string) {
    this.isToasting = true;
    this.toastCtrl.create({
      message,
      position: 'bottom',
      duration: 2500,
      color: 'success'
    }).then((load) => {
      load.present().then(() => {
        if (!this.isToasting) {
          load.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }

  errorToast(message: string) {
    this.isToasting = true;
    this.toastCtrl.create({
      message,
      position: 'bottom',
      duration: 2500,
      color: 'danger'
    }).then((load) => {
      load.present().then(() => {
        if (!this.isToasting) {
          load.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }


}
