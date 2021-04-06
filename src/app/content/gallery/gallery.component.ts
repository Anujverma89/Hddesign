import { Component, OnInit } from '@angular/core';
import { ImagedataService } from '../../../app/imagedata.service'
import { Title, Meta, DomSanitizer } from '@angular/platform-browser'


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  // image data 
  imagedata: any;

  // page title
  pagetitle: string = "beautiful deisgn of houses that wins the heart of the peoples"

  // video data
  youtubedata: any;
  // dataitems
  youtubeitems:any;

  constructor(private image: ImagedataService, private title: Title, private meta: Meta, private sanitizer: DomSanitizer) {
    this.image.getImageData().subscribe(data => {
      this.imagedata = data;
      console.log(data);
      error => console.log("failed", error);

    })

  }






  ngOnInit(): void {
    this.title.setTitle(this.pagetitle);
    this.meta.addTags([
      { name: "keywords", content: "Interior design best house in the city , Get your home decorated now." },
      { name: 'description', content: 'About Hd design House and interior space' }
    ])


    // this.image.getyoutubeVideo().subscribe(data => {
    //   this.youtubedata = data;
    //   console.log(this.youtubedata.items);
    //   this.youtubeitems=this.youtubedata.items;

     
    // }, error => {
    //   console.log(error);

    // })
  }




}
