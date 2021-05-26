import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [AboutUsComponent, ContactComponent, ErrorPageComponent, FaqComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
