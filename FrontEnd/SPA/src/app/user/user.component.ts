import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: any;

  ngOnInit() {
    this.getValues();
  }

  getValues()
  {
    this.http.get('http://localhost:5000/api/Users').subscribe(response =>
    {
      this.users = response;
      console.log(this.users);
    }, error => {
      console.log(error);
    });
  }

}
