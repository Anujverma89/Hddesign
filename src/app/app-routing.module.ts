import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { ErrorComponent } from './content/error/error.component';
import { GalleryComponent } from './content/gallery/gallery.component';
import { HomeComponent } from './content/home/home.component';
import { MainComponent } from './content/main/main.component';
import { PhotosComponent } from './content/photos/photos.component';
import { PrivacyComponent } from './content/privacy/privacy.component';
import { ServiceComponent } from './content/service/service.component';
import { VideosComponent } from './content/videos/videos.component';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./content/content.module').then(m => m.ContentModule) },
  // client panel routing
  {
    path: 'main', component: HomeComponent,
    children: [
      { path: '', component: MainComponent },
      { path: 'main', component: MainComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'privacy', component: PrivacyComponent },

      {
        path: 'gallery', component: GalleryComponent,
        children: [
          { path: 'photo', component: PhotosComponent },
          { path: 'videos', component: VideosComponent }

        ]
      },


    ]
  },
 
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
