import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import { BookModel } from './book.model';
import { Router } from '@angular/router'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  classId: number = 0;
  baseURL: string = "http://localhost:49164/api";
  books: BookModel[];
  constructor(private http: Http, private router: Router) {

  }
  ngOnInit() {
    this.getAllBooks()
  }
  add() {
    this.router.navigate(['/save-form'])
  }
  delete(book: BookModel) {
    if (confirm("Are sure you want to delete?")) {
      this.http.delete(this.baseURL + "/books/" + book.Id, this.getHTTPOptions())
        .map(result => {
          return result.text() ? result.json() : {}; 
        })
        .subscribe(result => {
          this.getAllBooks();
        })
    }
  }
  getHTTPOptions(): RequestOptionsArgs {
    let userDetails = JSON.parse(localStorage.getItem('boot-camp-userInfo'))
    let headers = new Headers({ 'Authorization': 'Bearer ' + userDetails.access_token });
    return new RequestOptions({ headers: headers });
  }
  edit(book: BookModel) {
    this.router.navigate(['/save-form/' + book.Id])
  }
  getAllBooks() {
    this.http.get(this.baseURL + "/books", this.getHTTPOptions())
      .map(result => {
        return result.text() ? result.json() : {}; 
      })
      .subscribe(result => {
        this.books = result;
      })
  }
}
