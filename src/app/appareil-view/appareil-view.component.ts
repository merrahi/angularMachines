import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth = false;

  appareils: any[];
  appareilSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });




  constructor(private  appareilService: AppareilService) {}
   /* setTimeout(
      ()=>{
        this.isAuth = true ;
      },4000

    );

  }*/
  ngOnInit() {
     this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();

  }
  onAllumer() {
    this.appareilService.switchOnAll();

  }
  onEteindre() {
    if (confirm('etes vous sur de vouloir eteindre toutes les machines? ')) {
      this.appareilService.switchOffAll();
    } else {
      return false;
    }
  }

  onSave() {
    this.appareilService.saveAppareilsToServer();
  }
  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }
  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }

}


