import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  login: LoginModel = new LoginModel();
  baseURL: string = "http://localhost:49164";
  constructor(private http: Http, private router: Router) {

  }
  ngOnInit() {
    this.login.grant_type = 'password';
  }
  loginUser() {
    var data = "username=" + this.login.username + '&password=' + this.login.password + '&grant_type=' + this.login.grant_type;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.baseURL + "/token", data, options)
      .map(result => {
        return result.json()
      })
      .subscribe(result => {
        localStorage.setItem('boot-camp-userInfo', JSON.stringify(result))
        this.router.navigate(['/component'])
      }, error => {
        alert("Username or password is incorrect.");
      })
  }
}
