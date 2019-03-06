import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { ComicsReleasesComponent } from './comics-releases/comics-releases.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'comics', component: ComicsComponent},
  {path: 'comics/:id', component: ComicsDetailComponent},
  {path: 'lastReleases', component: ComicsReleasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
