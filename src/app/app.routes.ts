import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication-page/authentication-page.component';
import { LoginPageComponent } from './pages/authentication-page/login-page/login-page.component';
import { NgModule } from '@angular/core';
import { ForgotPasswordPageComponent } from './pages/authentication-page/forgot-password-page/forgot-password-page.component';
import { CreateAccountPageComponent } from './pages/authentication-page/create-account-page/create-account-page.component';
import { FeedComponent } from './pages/main/feed/feed.component';

export const routes: Routes = [
    {path:"", redirectTo:"auth", pathMatch: "full"},
    {path:"auth", component: AuthenticationComponent, children: [
        {path:"login", component: LoginPageComponent},
        {path:"forgot-password", component:ForgotPasswordPageComponent},
        {path:"create-account", component:CreateAccountPageComponent}
    ]},
    {path:"feed", component: FeedComponent},
    {path:"**", component:AuthenticationComponent}
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }
