import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import { BookModel } from '../book.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-save-form',
  templateUrl: './save-form.component.html'
})
export class SaveFormComponent implements OnInit {
  classId: number = 0;
  baseURL: string = "http://localhost:49164/api";
  book: BookModel = new BookModel();
  bookId: number = 0;
  constructor(private http: Http, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit() {
    let bookId = this.route.snapshot.params['id'];
    if (bookId > 0) {
      this.bookId = bookId;
      this.getBook()
    }

  }
  getHTTPOptions(): RequestOptionsArgs {
    let userDetails = JSON.parse(localStorage.getItem('boot-camp-userInfo'))
    let headers = new Headers({ 'Authorization': 'Bearer ' + userDetails.access_token });
    return new RequestOptions({ headers: headers });
  }
  getBook() {
    this.http.get(this.baseURL + "/books/" + this.bookId, this.getHTTPOptions())
      .map(result => {
        return result.json()
      })
      .subscribe(result => {
        this.book = result;
      })
  }

  saveBook() {
    if (this.bookId > 0) {
      this.http.put(this.baseURL + "/books/" + this.bookId, this.book, this.getHTTPOptions())
        .map(result => {
          return result.text() ? result.json() : {}; 
        })
        .subscribe(result => {
          this.router.navigate(['/form'])
        })
    }
    else{
      this.http.post(this.baseURL + "/books", this.book, this.getHTTPOptions())
      .map(result => {
        return result.text() ? result.json() : {}; 
      })
      .subscribe(result => {
        this.router.navigate(['/form'])
      })
    }
  }
  cancelSave() {
    this.router.navigate(['/form'])
  }
}
