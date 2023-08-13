import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthenticationGuard } from "./core/authentication/authentication.guard";
import { LoginComponent } from "./login/login/login.component";
import { HomeComponent } from "./main/home/home.component";
import { AdminDashboardComponent } from "./module/admin-dashboard/admin-dashboard.component";
import { BirthComponent } from "./module/birth/birth.component";
import { DashboardComponent } from "./module/dashboard/dashboard.component";
import { DeathApplicationComponent } from "./module/death-application/death-application.component";
import { DeathPreviewComponent } from "./module/death-preview/death-preview.component";
import { DeathComponent } from "./module/death/death.component";
import { MarriageApplicationComponent } from "./module/marriage-application/marriage-application.component";
import { MarriageComponent } from "./module/marriage/marriage.component";
import { ProfileComponent } from "./module/profile/profile.component";
import { SettingsComponent } from "./module/settings/settings.component";
import { RegistrationComponent } from "./register/registration/registration.component";
import { AffidevitComponent } from "./module/affidevit/affidevit.component";
import { UserBirthApplicationComponent } from "./module/user-birth-application/user-birth-application.component";
import { UserDeathApplicationComponent } from "./module/user-death-application/user-death-application.component";
import { UserMarriageApplicationComponent } from "./module/user-marriage-application/user-marriage-application.component";
import { UserOthersApplicationComponent } from "./module/user-others-application/user-others-application.component";
import { UserMarriageNewApplicationComponent } from "./module/user-marriage-new-application/user-marriage-new-application.component";
import { UserDeathNewApplicationComponent } from "./module/user-death-new-application/user-death-new-application.component";
import { UserBirthNewApplicationComponent } from "./module/user-birth-new-application/user-birth-new-application.component";
import { UserMarriageApplicationPreviewComponent } from "./module/user-marriage-application-preview/user-marriage-application-preview.component";
import { UserBirthApplicationPreviewComponent } from "./module/user-birth-application-preview/user-birth-application-preview.component";
import { UserDeathApplicationPreviewComponent } from "./module/user-death-application-preview/user-death-application-preview.component";

const routes:Routes = [
    {path:"", component:HomeComponent},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegistrationComponent},
    {path:"user/dashboard", component:DashboardComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/dashboard", component:AdminDashboardComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/profile", component:ProfileComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/birth-certificate", component:BirthComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/death-certificate", component:DeathComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/death-preview", component:DeathPreviewComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/marriage-certificate", component:MarriageComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/death/application", component:DeathApplicationComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/marriage/application", component:MarriageApplicationComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/settings", component:SettingsComponent, canActivate:[AuthenticationGuard]},
    {path:"admin/affidevit", component:AffidevitComponent, canActivate:[AuthenticationGuard]},
    {path:"user/birth-certificate", component:UserBirthApplicationComponent},
    {path:"user/death-certificate", component:UserDeathApplicationComponent},
    {path:"user/marriage-certificate", component:UserMarriageApplicationComponent},
    {path:"user/marriage/application", component:UserMarriageNewApplicationComponent},
    {path:"user/death/application", component:UserDeathNewApplicationComponent},
    {path:"user/birth/application", component:UserBirthNewApplicationComponent},
    {path:"user/other-application", component:UserOthersApplicationComponent},
    {path:"user/marriage/application/preview", component:UserMarriageApplicationPreviewComponent},
    {path:"user/birth/application/preview", component:UserBirthApplicationPreviewComponent},
    {path:"user/death/application/preview", component:UserDeathApplicationPreviewComponent},
    {path:"admin/marriage/application/preview", component:UserMarriageApplicationPreviewComponent},
    
    
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}