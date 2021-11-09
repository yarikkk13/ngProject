import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {SectionComponent} from "./components/section/section.component";
import {NewCourseComponent} from "./components/new-course/new-course.component";
import {EditCourseComponent} from "./components/edit-course/edit-course.component";

const routes: Routes = [
  {path: '', component: SectionComponent},
  {path: 'new', component: NewCourseComponent},
  {path: ':id', component: EditCourseComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoursesRoutingModule {
}
