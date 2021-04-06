import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private NgxSpinnerService: NgxSpinnerService) {

    this.NgxSpinnerService.show();

    setTimeout(() => {
      this.NgxSpinnerService.hide();
    }, 2000);

  }

  ngOnInit(): void {




  }
}


