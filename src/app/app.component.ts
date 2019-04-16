import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, interval } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  secondes : number;
  counterSubscription : Subscription;

  constructor() {
    
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value : number) => {
        this.secondes = value;
      },
      (error : any) => {
        console.log('Une erreur a été rencontrée!');
      },
      () => {
        console.log('Observable complété!');
      }
    );
  } 

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
