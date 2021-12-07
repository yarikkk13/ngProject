import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { CoursesRoutingModule } from './courses-routing.module';
import { SectionComponent } from "./components/section/section.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { PageComponent } from "./components/page/page.component";
import { NewCourseComponent } from "./components/new-course/new-course.component";
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { CreationDateDirective } from "../../directives/creation-date.directive";
import { FilterPipe } from "../../pipes/filter.pipe";
import { OrderByPipe } from "../../pipes/order-by.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";

@NgModule({
  declarations: [
    SectionComponent,
    BreadcrumbComponent,
    PageComponent,
    NewCourseComponent,
    EditCourseComponent,
    CreationDateDirective,
    FilterPipe,
    OrderByPipe,
    DurationPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule,
  ],
  exports: [
    CreationDateDirective,
    FilterPipe,
    OrderByPipe,
    DurationPipe,
  ]
})

export class CoursesModule {
}
