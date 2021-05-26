import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LoginComponent } from './login/login.component';

import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'about-us', component: AboutUsComponent },
      { path: 'register', component: RegisterComponent },
      { path: '404', component: ErrorPageComponent },
      { path: 'login', component: LoginComponent }, 
      { path: 'contact', component: ContactComponent },
      { path: 'faq', component: FaqComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

