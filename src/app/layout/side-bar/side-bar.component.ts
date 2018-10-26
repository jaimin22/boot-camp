import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  activePath: string = "";
  constructor(private router: Router, private location: Location) {
    router.events.subscribe((val) => {
      this.activePath = location.path();

    });
  }
  ngOnInit() {

  }


}
