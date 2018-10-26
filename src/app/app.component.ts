import { Component, OnInit } from '@angular/core';
import { inherits } from 'util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Boot Camp';

  ngOnInit() {
    this.getDetails();
  }

  getDetails() {
    
  }
  getChangeDetails() {
    
  }
  
}
