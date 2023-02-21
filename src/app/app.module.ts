import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import {AppRoutingModule} from './app-routing-module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { RegistrationComponent } from './register/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { TokenInterceptor } from 'src/services/tokenInterceptor.services';
import { StepOneComponent } from './register/step-one/step-one.component';
import { StepTwoComponent } from './register/step-two/step-two.component';
import { StepThreeComponent } from './register/step-three/step-three.component';
import { MainTopMenuComponent } from './navigation/main-top-menu/main-top-menu.component';
import { SideNavComponent } from './navigation/side-nav/side-nav.component';
import { ProfileComponent } from './module/profile/profile.component';
import { AdminDashboardComponent } from './module/admin-dashboard/admin-dashboard.component';
import { BirthComponent } from './module/birth/birth.component';
import { DeathComponent } from './module/death/death.component';
import { MarriageComponent } from './module/marriage/marriage.component';
import { TopMenuComponent } from './navigation/top-menu/top-menu.component';
import { DeathApplicationComponent } from './module/death-application/death-application.component';
import { MarriageApplicationComponent } from './module/marriage-application/marriage-application.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    DashboardComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    MainTopMenuComponent,
    SideNavComponent,
    ProfileComponent,
    AdminDashboardComponent,
    BirthComponent,
    DeathComponent,
    MarriageComponent,
    TopMenuComponent,
    DeathApplicationComponent,
    MarriageApplicationComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
