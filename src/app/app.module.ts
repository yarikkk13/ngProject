import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { AppRoutingModule} from "./app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageComponent } from './components/page/page.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { SectionComponent } from './components/section/section.component';
import { FormsModule } from "@angular/forms";
import { DurationPipe } from './pipes/duration.pipe';
import { CreationDateDirective } from './directives/creation-date.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { IfAuthenticatedDirective } from './directives/if-authenticated.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageComponent,
    BreadcrumbComponent,
    SectionComponent,
    DurationPipe,
    CreationDateDirective,
    OrderByPipe,
    FilterPipe,
    LoginComponent,
    IfAuthenticatedDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
