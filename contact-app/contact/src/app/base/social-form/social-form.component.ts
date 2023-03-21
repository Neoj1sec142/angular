import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactServiceService } from 'src/app/_services/contact-service.service';
import { SocialServiceService } from 'src/app/_services/social-service.service';
import {ContactSocial, SocialCategoryTypes} from '../../_models/social'
@Component({
  selector: 'app-social-form',
  templateUrl: './social-form.component.html',
  styleUrls: ['./social-form.component.css']
})
export class SocialFormComponent implements OnInit {
  socialCategories: string[] = [];
  socialForm!: FormGroup;
  submitted: boolean = false;
  contacts: {id: number, name: string}[] = [];
  constructor(private formBuilder: FormBuilder,
    private socialService: SocialServiceService,
    private contactService: ContactServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.socialForm = this.formBuilder.group({
      contact: [''],
      social: [''],
      category: ['']
    })
    this.contactService.getContactsNames().subscribe((data) => {
      this.contacts = data;
    })
    this.socialCategories = SocialCategoryTypes;
  }
  onSubmit(){
    this.submitted = true;
    if(this.socialForm.valid){
      const social: ContactSocial = {
        contact: this.socialForm.value.contact,
        social: this.socialForm.value.social,
        category: this.socialForm.value.category
      }
      this.socialService.addSocial(social).subscribe(
        (response) => {
          console.log(response, "Success")
          if (window.confirm("Social has been uploaded successfully. Are you finished with this contact?")) {
            this.router.navigate(['/contacts']);
          }
        },
        (error) => console.log(error, "Error"))
    }
  }
}
