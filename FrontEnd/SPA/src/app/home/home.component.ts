import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.GetValues();
  }

  GetValues()
  {
    this.http.get('http://localhost:5000/api/Users').subscribe(response =>
    {
      this.users = response;
      console.log('Get values from Home component' + this.users);
    }, error => {
      console.log(error);
    });
  }

  registerToggle()
  {
    this.registerMode = true;
  }

  cancelRegisterMode(registermode: boolean)
  {
    this.registerMode = registermode;
  }

}
