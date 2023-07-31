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
import { LandingPageComponent } from './navigation/landing-page/landing-page.component';
import { SettingsComponent } from './module/settings/settings.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { TopMenuDashboardComponent } from './navigation/top-menu-dashboard/top-menu-dashboard.component';
import { SideNavDashboardComponent } from './navigation/side-nav-dashboard/side-nav-dashboard.component';
import { StepFourComponent } from './module/marriage-application/step-four/step-four.component';
import { StepFiveComponent } from './module/marriage-application/step-five/step-five.component';
import { StepSixComponent } from './module/marriage-application/step-six/step-six.component';
import { ApplicationSettingComponent } from './module/settings/application-setting/application-setting.component';
import { MediaSettingComponent } from './module/settings/media-setting/media-setting.component';
import { ModuleSettingComponent } from './module/settings/module-setting/module-setting.component';
import { StepOneMarriageComponent } from './module/marriage-application/step-one-marriage/step-one-marriage.component';
import { StepTwoMarriageComponent } from './module/marriage-application/step-two-marriage/step-two-marriage.component';
import { StepThreeMarriageComponent } from './module/marriage-application/step-three-marriage/step-three-marriage.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DeathPreviewComponent } from './module/death-preview/death-preview.component';
import { BirthApplicationComponent } from './module/birth-application/birth-application.component';
import { BirthPreviewComponent } from './module/birth-preview/birth-preview.component';
import { AffidevitComponent } from './module/affidevit/affidevit.component';
import { PaystackComponent } from './main/paystack/paystack.component';
import { Angular4PaystackModule } from 'angular4-paystack';

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
    MarriageApplicationComponent,
    LandingPageComponent,
    SettingsComponent,
    FooterComponent,
    TopMenuDashboardComponent,
    SideNavDashboardComponent,
    StepFourComponent,
    StepFiveComponent,
    StepSixComponent,
    ApplicationSettingComponent,
    MediaSettingComponent,
    ModuleSettingComponent,
    StepOneMarriageComponent,
    StepTwoMarriageComponent,
    StepThreeMarriageComponent,
    DeathPreviewComponent,
    BirthApplicationComponent,
    BirthPreviewComponent,
    AffidevitComponent,
    PaystackComponent
  ],
  imports: [
    BrowserModule,
    LoadingBarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Angular4PaystackModule.forRoot('pk_test_8f5967cc3ec531802a27183d856391b903aaa517'),
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
