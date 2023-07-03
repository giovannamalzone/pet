import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { AdoptPageComponent } from './pages/adopt-page/adopt-page.component';
import { HelpUsPageComponent } from './pages/help-us-page/help-us-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'adopt',
    component: AdoptPageComponent,
  },
  {
    path: 'help-us',
    component: HelpUsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {

}
