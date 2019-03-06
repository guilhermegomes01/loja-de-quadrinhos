import { ComicsService } from './comics/comics.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { ComicsReleasesComponent } from './comics-releases/comics-releases.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ComicsComponent,
    ComicsDetailComponent,
    ComicsReleasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ComicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
