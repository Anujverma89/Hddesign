import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { ContentRoutingModule } from './content-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { VideosComponent } from './videos/videos.component';
import { ErrorComponent } from './error/error.component';
import { ResuableModule } from '../reusable/reusable.module';
import { MainComponent } from './main/main.component';
import { LeadsComponent } from './leads/leads.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { PrivacyComponent } from './privacy/privacy.component';
import { NgxSpinnerModule } from 'ngx-spinner'



@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, ServiceComponent, GalleryComponent, PhotosComponent, VideosComponent, ErrorComponent, MainComponent, LeadsComponent, PrivacyComponent],
  imports: [
    CommonModule,
    ContentRoutingModule,
    ResuableModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule

  ]
})
export class ContentModule { }
