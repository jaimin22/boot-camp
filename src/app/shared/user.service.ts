import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.models';
@Injectable()
export class UserService {
    constructor() { }
    getUserModel(): UserModel {
        var user: UserModel = new UserModel();
        user.id = 2;
        user.name = 'Maria Howard';
        user.dob = new Date(1992, 5, 12);
        user.salary = 12000;
        return user;
    }
}