import { Component, OnInit } from '@angular/core';
import { ImagedataService } from '../../../app/imagedata.service'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: []
})
export class MainComponent implements OnInit {

  imageurl: any;
  pagetitle: string = "Best interior design house of india || Easy , Safe and long lasting and durable"
  // image data var
  imagedata: any;
  constructor(private image: ImagedataService, private title: Title, private meta: Meta) { }

  ngOnInit(): void {


    this.image.getImageData().subscribe(data => {
      this.imagedata = data;
      this.imageurl = data[0].Imageurl;
      console.log(data);
      error => console.log("failed", error);

    })



    // addinf metaand title
    this.title.setTitle(this.pagetitle);
    this.meta.addTags([
      { name: "keywords", content: "Interior design best house in the city , Get your home decorated now." },
      { name: 'description', content: 'About Hd design House and interior space' }
    ])
  }

}
