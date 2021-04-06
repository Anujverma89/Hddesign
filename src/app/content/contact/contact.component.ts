import { Component, OnInit, } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  pageTitle: string = "Contact us page|| Best interior design studio of india"
  constructor(private title: Title, private meta: Meta) {

  }

  ngOnInit(): void {
    this.title.setTitle(this.pageTitle);
    this.meta.addTags([
      { name: "keywords", content: "Interior design best house in the city , Get your home decorated now." },
      { name: 'description', content: 'About Hd design House and interior space' }
    ])
  }



}
