import { Component, OnInit } from '@angular/core';
import {
  ImagedataService
} from '../../imagedata.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviewdata: any;

  // reviews name
  Name: any;
  location: any;
  star: any;
  imgrul: any;
  text:any;

  constructor(private review: ImagedataService) { }

  ngOnInit(): void {
    this.review.getReviewData().subscribe(Response => {
      console.log(Response);
      this.reviewdata = Response;
      this.Name = this.reviewdata[0].Name;
      this.location = this.reviewdata[0].Location;
      this.star = this.reviewdata[0].star;
      this.imgrul = this.reviewdata[0].Image;
      this.text=this.reviewdata[0].Text;

    }, error => {
      console.log(error);
      alert("Unable to fetch data something went woring please try after some time.");
    }



    )

  }


}
