import { Routes } from '@angular/router';
import { PasswordGenerateComponent } from './components/password-generate/password-generate.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'password-generator', component: PasswordGenerateComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
];
