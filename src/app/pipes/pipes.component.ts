import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user.models'
@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})
export class PipesComponent implements OnInit {

  name: Promise<string> | null = null;
  user: UserModel = new UserModel();
  currentMonth:number = new Date().getMonth() + 1; 
  ngOnInit() {

    this.user.name = "Jaimin Panchal";
    this.user.salary = 3000;
    this.user.id = 1;
    this.user.dob = new Date(1990, 3, 18);


    this.name = new Promise<string>((resolve, reject) => {
      resolve("Jaimin");
    });
  }
}
