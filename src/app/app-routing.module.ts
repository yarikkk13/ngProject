import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/login/login.component";
import { NewCourseComponent } from "./components/new-course/new-course.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'add_course', component: NewCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
