import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {SectionComponent} from "./components/section/section.component";
import {FormsModule} from "@angular/forms";
import {NewCourseComponent} from "./components/new-course/new-course.component";
import {PageComponent} from "./components/page/page.component";
import {BreadcrumbComponent} from "./components/breadcrumb/breadcrumb.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FilterPipe} from "../../pipes/filter.pipe";
import {OrderByPipe} from "../../pipes/order-by.pipe";
import {DurationPipe} from "../../pipes/duration.pipe";
import {CreationDateDirective} from "../../directives/creation-date.directive";


@NgModule({
  declarations: [
    SectionComponent,
    NewCourseComponent,
    PageComponent,
    BreadcrumbComponent,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
    CreationDateDirective,
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    MatFormFieldModule
  ],
  exports: [
    FilterPipe,
    OrderByPipe,
    DurationPipe,
    CreationDateDirective,


  ]
})
export class CoursesModule {
}
