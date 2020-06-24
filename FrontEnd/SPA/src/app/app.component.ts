import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private authService: AuthService){}

  jwtToken = new JwtHelperService();
  title = 'SPA';
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token)
    {
      this.authService.decodedToken = this.jwtToken.decodeToken(token);
    }
  }
}
