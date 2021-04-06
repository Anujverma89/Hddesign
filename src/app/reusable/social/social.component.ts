import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  // declearing url this will be loaded dinamically.
  facebookurl="https://www.facebook.com/Hdinteriordesigns";
  Twitterurl="https://twitter.com/hd_interior";
  instagramurl="https://instagram.com/hd_interor";
  youtubeurl="https://www.youtube.com/channel/UCwzKdn1qJmV48SC_7fEuS1A";

  constructor() { }

  ngOnInit(): void {
  }

}
