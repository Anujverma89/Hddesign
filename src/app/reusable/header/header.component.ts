import { Component, DoCheck, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {

  // this is the class binding for hinding and displaying side bar
  public hiddenbars: string = 'hiddenbars'; //class binding

  // opening the side bars
  loadsidenav() {

    this.hiddenbars = 'showsidebar'

  }

  // closing the side bars
  hidenav() {
    this.hiddenbars = 'hiddenbars';
  }
  // hiding content on link click
  hidecontent() {

    this.hiddenbars = "hiddenbars";
  }
  // initilising the date 
  newyear = new Date().getFullYear();
  year = this.newyear;


  // adding scroll effect on header

  @HostListener('document:scroll')
  onscroll() {
    var change = document.getElementById('navbar')
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      change.style.backgroundColor = ' #09aee0';
    }
    else {
      change.style.backgroundColor = '#b9eef3';
    }
  }

  


constructor(){}

  // constructor(private elementref: ElementRef) {


  // }

  ngOnInit(): void {
    // this.elementref.nativeElement.querySelector('#hide').addEventListner('click' ,this.onclick.bind(this))


  }
  // this is not working we need to solve it 
  // onclick(event){
  //   if (event.target.closet('#hide')) return;
  //   else{
  //     this.hiddenbars='hiddenbars'
  //   }
  // }

  ngDoCheck() {

  }



}
