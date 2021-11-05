import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      { 
          path: '',
          redirectTo: 'login',
          pathMatch: 'full'
      },

      {
        path: 'login',
        component: LoginComponent
      },
    
      {
        path: 'Signup',
        component: RegisterComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
