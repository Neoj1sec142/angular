import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { SocialFormComponent } from './social-form/social-form.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactServiceService } from 'src/app/_services/contact-service.service';
import { EmailServiceService } from 'src/app/_services/email-service.service';
import { SocialServiceService } from 'src/app/_services/social-service.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'contacts', component: ContactListComponent },
      { path: 'new-contact', component: ContactFormComponent },
      { path: 'new-social', component: SocialFormComponent },
      { path: 'new-email', component: EmailFormComponent },
      { path: 'contact/:id', component: ContactDetailComponent },
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ContactListComponent,
    ContactDetailComponent,
    ContactFormComponent,
    SocialFormComponent,
    EmailFormComponent
  ],
  providers: [
    ContactServiceService,
    EmailServiceService,
    SocialServiceService
  ],
  declarations: [
    ContactListComponent,
    ContactDetailComponent,
    ContactFormComponent,
    SocialFormComponent,
    EmailFormComponent,
  ],
})
export class BaseModuleModule { }
