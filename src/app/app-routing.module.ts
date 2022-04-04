import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'matchprofile',
    loadChildren: () => import('./pages/matchprofile/matchprofile.module').then( m => m.MatchprofilePageModule)
  },
  {
    path: 'swipeprofile',
    loadChildren: () => import('./pages/swipeprofile/swipeprofile.module').then( m => m.SwipeprofilePageModule)
  },
  {
    path: 'profile-info',
    loadChildren: () => import('./pages/profile-info/profile-info.module').then( m => m.ProfileInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
