import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { CovidComponent } from './covid/covid.component';


const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "News",
    component : NewsComponent
  },
  {
    path : "Contact",
    component : ContactComponent
  },
  {
    path : "CovidCases",
    component : CovidComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
