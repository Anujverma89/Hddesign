import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pagetitle: string = "About us Hd design House and interior space|| Best interior desgin studio of india"


  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.title.setTitle(this.pagetitle);
    this.meta.addTags([
      { name: 'keywords', content: 'Best design studio, best interior designs' },
      { name: 'description', content: 'About Hd design House and interior space' }
    ]);
  }

}
