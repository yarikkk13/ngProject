import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'courses', loadChildren: () => import('./modules/courses/courses.module').then(m => m.CoursesModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
