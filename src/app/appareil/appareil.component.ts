import { Component, Input, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';


@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string
  @Input() appareilStatus: string ;
  @Input() index: number ;
  @Input() id: number;
  //appareilStatus :string= "éteint";
  constructor(private  appareilservice:AppareilService) { }

  ngOnInit() {
  }
  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus === 'allumé'){
      return 'green';

    }
    else if(this.appareilStatus === 'éteint')
    {
      return 'red';
    }
  }
  onSwitch(){
    if(this.appareilStatus=='éteint'){
      this.appareilservice.switchOnOne(this.index);
    }
    else if(this.appareilStatus=='allumé'){
      this.appareilservice.switchOffOne(this.index);
    }

  }

}
