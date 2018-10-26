import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../shared/broadcast.service';
@Component({
  selector: 'app-broadcasting',
  templateUrl: './broadcasting.component.html'
})
export class BroadcastingComponent implements OnInit {
  constructor(private broadcastService: BroadcastService) {

  }
  ngOnInit() {
  }
  emitEvent() {
    this.broadcastService.emit({ name: 'Jaimin' });
  }
}
