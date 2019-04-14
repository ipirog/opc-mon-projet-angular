import { Component, Input, OnInit } from '@angular/core';
import { AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() indexOfAppareil : number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    return this.appareilStatus === 'éteint' ? 'red' : 'green';
  }

  allume() {
    this.appareilService.switchOn(this.indexOfAppareil);
  }

  eteint() {
    this.appareilService.switchOff(this.indexOfAppareil);
  }
}
