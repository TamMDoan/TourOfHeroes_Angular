import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

const routes: Routes = [
  // default route... redirects to dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent},
  { path: 'dashboard', component: DashboardComponent},
  // : means that :id is placeholder for hero id
  { path: '/detail/:id', component: HeroDetailComponent}
];

@NgModule({
  // configures RouterModule to use routes in routes var
  imports: [RouterModule.forRoot(routes)],
  // exports RouterModule to be available across app
  exports: [RouterModule]
})
export class AppRoutingModule { }
