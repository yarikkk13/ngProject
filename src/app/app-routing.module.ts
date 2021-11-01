import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewCourseComponent } from "./components/new-course/new-course.component";

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'add_course', component: NewCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
