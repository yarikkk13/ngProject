import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SectionComponent } from './components/section/section.component';
import { FormsModule } from "@angular/forms";
import { DurationPipe } from './pipes/duration.pipe';
import { CreationDateDirective } from './directives/creation-date.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    FooterComponent,
    PageComponent,
    BreadcrumbComponent,
    SectionComponent,
    DurationPipe,
    CreationDateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
