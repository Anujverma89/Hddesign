import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  pagetitle: string = "Our services that makes us famous and their Pricings"

  // phoneno
  phoneno = "tel:+91-8978204161";
  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle(this.pagetitle);
    this.meta.addTags([
      { name: "keywords", content: "Interior design best house in the city , Get your home decorated now." },
      { name: 'description', content: 'About Hd design House and interior space' }
    ])
  }

}
