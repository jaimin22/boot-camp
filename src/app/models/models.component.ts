import { Component, OnInit } from '@angular/core';
import { UserModel, EventBindingModel } from './user.models';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html'
})
export class ModelsComponent implements OnInit {
  user: UserModel = new UserModel();
  eventBindingModel: EventBindingModel = new EventBindingModel();
  userFromService: UserModel = new UserModel();
  constructor(private userService: UserService) {

  }
  ngOnInit() {
    this.user.id = 1;
    this.user.name = 'James Brown';
    this.user.salary = 25000;
    this.user.dob = new Date(2018, 3, 18);


    this.eventBindingModel.myNumber = 0;
    this.eventBindingModel.sumOfNumbers = 0;
  }

  setValue() {
    this.user.name = 'Jaimin Panchal';
  }
  changeNumber() {
    if (this.eventBindingModel.myNumber > 0) {
      this.eventBindingModel.sumOfNumbers = this.eventBindingModel.myNumber * 100;
    }
    else {
      this.eventBindingModel.sumOfNumbers = 0;
    }
  }
  clearSum() {
    this.eventBindingModel.myNumber = 0;
    this.changeNumber();
  }
  getValueFromService() {
    this.userFromService = this.userService.getUserModel();
  }
}
