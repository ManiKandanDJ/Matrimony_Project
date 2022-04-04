import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, GestureController, IonCard, Platform } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-swipeprofile',
  templateUrl: './swipeprofile.page.html',
  styleUrls: ['./swipeprofile.page.scss'],
})
export class SwipeprofilePage implements OnInit {

  profileInfo: any = [];
  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;

  public gestureX: any;
  public gestureY: any;
  public profiles = [];
  cardArray: any[] = [];

  private unlistener: () => void;
  profileCheck: boolean = true;


  constructor(private global: GlobalService, private router: Router, public gestureCtrl: GestureController,
    private platform: Platform,
    private renderer2: Renderer2,
    private animationCtrl: AnimationController) {
  }

  async ngOnInit() {
    this.profileInfo = await this.global.getProfileInfoDetails()
  }

  ionViewDidEnter() {
    this.cardArray = this.cards.toArray();
    this.useSwiperGesture(this.cardArray);
  }

  useSwiperGesture(cardArray) {
    cardArray.forEach((data: ElementRef) => {
      const card = data;
      this.gestureX = this.gestureCtrl.create({
        direction: 'x',
        el: card.nativeElement,
        threshold: 15,
        gestureName: 'swipte',
        onStart: (ev) => {
          console.log(ev);
        },
        onMove: (ev) => {
          console.log(ev.deltaX);
          card.nativeElement.style.transform = `translateX(${ev.deltaX}px) rotate(${ev.deltaX / 10}deg)`;
        },
        onEnd: (ev) => {
          card.nativeElement.style.transition = '1s ease-out';
          if (ev.deltaX > 150) {
            card.nativeElement.style.transform = `translateX(${+this.platform.width() * 3
              }px) rotate(${ev.deltaX / 3}deg)`;
            this.global.successToast('Interested');
          }
          else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${+this.platform.width() * 3
              }px) rotate(${ev.deltaX / 3}deg)`;
            this.global.errorToast('Not Interested');
          }
          else {
            card.nativeElement.style.transform = '';
          }
        },
      });
      this.gestureY = this.gestureCtrl.create({
        direction: 'y',
        el: card.nativeElement,
        threshold: 15,
        gestureName: 'swipte',
        onStart: (ev) => {
          console.log(ev);
        },
        onMove: (ev) => {
          ;
          card.nativeElement.style.transform = `translateY(${ev.deltaY}px) rotate(${ev.deltaY / 10}deg)`;
        },
        onEnd: (ev) => {
          card.nativeElement.style.transition = '1s ease-out';
          if (ev.deltaY < 0) {
            card.nativeElement.style.transform = `translateY(-${+this.platform.width() * 3
              }px) rotate(${ev.deltaY / 3}deg)`;
            this.global.successToast('Shortlisted');
          }
          else {
            card.nativeElement.style.transform = '';
          }
        },
      });
      this.gestureY.enable(true);
      this.gestureX.enable(true);
    });
  }


  profileShortList() {
    this.global.successToast('Shortlisted');
  }

  profileStatusCheck(flag: boolean) {
    if (flag) {
      this.global.successToast('Interested');
    } else {
      this.global.errorToast('Not Interested');
    }
  }

  interested(i) {
    if (i == 1) {
      this.profileCheck = false;
    }
    const card = this.cardArray[i];
    const animation = this.animationCtrl
      .create()
      .addElement(card.nativeElement)
      .duration(1500)
      .from('transform', `rotate(40deg)`)
      .to('transform', `translateX(${+this.platform.width() * 2}px)`);
    animation.play();
    this.profileStatusCheck(true);
  }

  notInterested(i) {
    if (i == 1) {
      this.profileCheck = false;
    }
    const card = this.cardArray[i];
    const animation = this.animationCtrl
      .create()
      .addElement(card.nativeElement)
      .duration(1500)
      .from('transform', `rotate(-40deg)`)
      .to('transform', `translateX(-${+this.platform.width() * 4}px)`);
    animation.play();

    this.profileStatusCheck(false);
  }

  shortlist(i) {
    if (i == 1) {
      this.profileCheck = false;
    }
    const card = this.cardArray[i];
    const animation = this.animationCtrl
      .create()
      .addElement(card.nativeElement)
      .duration(1500)
      .from('transform', `rotate(40deg)`)
      .to('transform', `translateX(${+this.platform.width() * 2}px)`);
    animation.play();
    this.profileShortList();
  }



}
