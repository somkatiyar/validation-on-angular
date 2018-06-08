import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Login } from '../pages/login/login';
import { Check } from '../pages/check/check';
import { Flag } from '../pages/flag/flag';
import { Registration } from '../pages/registration/registration';

import { RouterModule, Routes}  from '@angular/router';



const appRoutes: Routes = [
  { path : 'login',component : Login},
  { path : 'registration',component : Registration},
  { path : 'check',component : Check},
  { path : 'flag',component : Flag},

  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    Login,
    Registration,
    Check,
    Flag

  ],
  imports: [
    BrowserModule,
     ReactiveFormsModule,

     RouterModule.forRoot(appRoutes),
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
