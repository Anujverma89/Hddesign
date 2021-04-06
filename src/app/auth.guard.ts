import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ImagedataService } from "../app/imagedata.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private Router: Router, private login: ImagedataService) { }



  canActivate(): boolean {
    if (this.login.getLogin() == false) {
      this.Router.navigate(['/login']);
    } else {
      return true;



    }

  }




}
