import { Component } from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, Subscription} from 'rxjs';

import {count} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pr';
  secondes: number;
  counterSubscription: Subscription;

  ngOnInit() {
    const counter = Observable.create((observer) => {
      // observer.next(1000);
      setTimeout(()=>{
        observer.next(20);
      },1000);

    });

    this.counterSubscription = counter.subscribe(
      (value) =>  {
        this.secondes = value;
      },
      (error) =>  {
        console.log('Uh-oh, an error occurred! : ' + error);

      },
      () =>  {
        console.log('Observable complete!');
      }
    );
  }
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }


}
