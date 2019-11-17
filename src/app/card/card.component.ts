import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';
import { Card } from './../../model/card';
import { Subject } from 'rxjs';

import { ConfigService } from './../../service/init.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() cards: Card[];
  public index = 0;
  @Input()
  parentSubject: Subject<any>;
  animationState: string;
  isActive: boolean;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.parentSubject.subscribe(event => {
      this.startAnimation(event)
    });
  }

  startAnimation(state) {
    this.isActive = null;
    if (!this.animationState) {
      this.animationState = state;
    }
    if (this.animationState=="swiperight") {
      this.voteOk(this.cards[this.index]._id);
    }
    if (this.animationState=="swipeleft") {
      this.voteNo(this.cards[this.index]._id);
    }
    this.index++;
  }

  resetAnimationState(state) {
    this.animationState = '';
    //this.index++;
    this.isActive = true;
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

  voteOk(id: string) {
    this.configService.agreeAnswer(id).subscribe();
  }

  voteNo(id: string) {
    this.configService.disagreeAnswer(id).subscribe();
  }

}
