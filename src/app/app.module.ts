import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [
{ path: '' , component:HomeComponent },
{ path: 'user/:id', component: UserComponent}
]
@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, UserComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
