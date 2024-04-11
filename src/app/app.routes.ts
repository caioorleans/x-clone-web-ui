import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication-page/authentication-page.component';
import { LoginPageComponent } from './pages/authentication-page/login-page/login-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"", redirectTo:"auth", pathMatch: "full"},
    {path:"auth", component: AuthenticationComponent, children: [
        {path:"login", component: LoginPageComponent}
    ]},
    {path:"**", component:LoginPageComponent}
];
@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }
