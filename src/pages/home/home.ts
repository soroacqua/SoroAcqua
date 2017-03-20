import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
  @ViewChild(Slides) slides: Slides;

  constructor(platform: Platform) {
  }

  homeOptions = {
    initialSlide: 0,
    loop: true,
    autoplay:3000,
    autoplayDisableOnInteraction: false,
    pager:true,
    nextButton:true,
    prevButton:true
      };
}
