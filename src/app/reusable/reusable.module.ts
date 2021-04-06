import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ContentRoutingModule } from '../content/content-routing.module';
import { SocialComponent } from './social/social.component';





@NgModule({
  declarations: [HeaderComponent, FooterComponent, ReviewsComponent, SocialComponent],
  imports: [
    CommonModule,ContentRoutingModule
  ],
  exports:[HeaderComponent, FooterComponent,ReviewsComponent, SocialComponent],
})
export class ResuableModule { }
