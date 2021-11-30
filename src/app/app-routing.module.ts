import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedIn } from './shared/utilities/is-logged-in';


const routes: Routes = [

    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },

    { 
      path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      resolve: [IsLoggedIn]
    },

    { path: 'Dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    },

    {
      path: '**',
      redirectTo: 'home'
    }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
