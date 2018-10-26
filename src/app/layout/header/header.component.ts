import { Component, OnInit } from '@angular/core';
import { BroadcastService } from '../../shared/broadcast.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  name: string = 'John';
  constructor(private broadcastService: BroadcastService) {
  }

  ngOnInit() {
    this.broadcastService.on().subscribe(result => {
      this.name = result.name;
    })
  }


}
