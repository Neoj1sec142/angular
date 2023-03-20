import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactEmail, EmailCategoryTypes } from 'src/app/_models/email';
import { EmailServiceService } from 'src/app/_services/email-service.service';
import { ContactServiceService } from 'src/app/_services/contact-service.service';
@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  emailCategories: string[] = [];
  emailForm!: FormGroup;
  submitted: boolean = false;
  contacts: {id: number, name: string}[] = [];
  constructor(private formBuilder: FormBuilder,
    private emailService: EmailServiceService,
    private contactService: ContactServiceService) { }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      contact: [''],
      email: ['', Validators.required],
      category: ['']
    })
    this.contactService.getContactsNames().subscribe((data) => {
      this.contacts = data;
    })
    this.emailCategories = EmailCategoryTypes;
    
  }
  onSubmit(){
    this.submitted = true;
    if(this.emailForm.valid){
      const email: ContactEmail = {
        contact: this.emailForm.value.contact,
        email: this.emailForm.value.email,
        category: this.emailForm.value.category
      }
      this.emailService.addEmail(email).subscribe(
        (response) => {
          console.log(response, "Success")
        },
        (error) => {
          console.log(error, "Error")
        })
    }
  }

}
