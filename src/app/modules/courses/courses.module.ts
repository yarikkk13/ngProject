import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";

import { CoursesRoutingModule } from './courses-routing.module';
import { SectionComponent } from "./components/section/section.component";
import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { PageComponent } from "./components/page/page.component";
import { NewCourseComponent } from "./components/new-course/new-course.component";
import { CreationDateDirective } from "../../directives/creation-date.directive";
import { FilterPipe } from "../../pipes/filter.pipe";
import { OrderByPipe } from "../../pipes/order-by.pipe";
import { DurationPipe } from "../../pipes/duration.pipe";
import { EditCourseComponent } from './components/edit-course/edit-course.component';

@NgModule({
  declarations: [
    SectionComponent,
    BreadcrumbComponent,
    PageComponent,
    NewCourseComponent,
    CreationDateDirective,
    OrderByPipe,
    FilterPipe,
    DurationPipe,
    EditCourseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
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
