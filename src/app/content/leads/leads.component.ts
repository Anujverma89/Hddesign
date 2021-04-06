import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ImagedataService } from '../../../app/imagedata.service';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.css']
})
export class LeadsComponent implements OnInit {



  constructor(private fb: FormBuilder, private from: ImagedataService, private router: Router) { }
  formsubmit(leaddata) {
    this.from.postFormData(leaddata).subscribe(response => {
      alert("Thanks for getting touch with us we will reach you soon"), console.log(response), this.router.navigate(['']);
    },
      error => console.log("failed!", error))

  }


  // setting link for conatcts details 
  PhoneNo = "tel:+91-8978204161"
  Email_id = "mailto:hddesignhouse@gmail.com"
  watsapp = "https://api.whatsapp.com/send?phone=+918978204161"
  ngOnInit(): void {
  }

}
