import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MessagesComponent} from './messages/messages.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'messages', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
