import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../../_models/contact';
import {ContactServiceService} from '../../_services/contact-service.service'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, 
    private contactService: ContactServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      phone_number: ['', Validators.required],
      address: [''],
      city_state: [''],
      reference: ['']
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.valid) {
      
      const contact: Contact = {
        name: this.contactForm.value.name,
        phone_number: this.contactForm.value.phone_number,
        address: this.contactForm.value.address || '', 
        city_state: this.contactForm.value.city_state || '',
        reference: this.contactForm.value.reference || ''
      }
  
      this.contactService.createContact(contact).subscribe(
        (response) => {
          if (window.confirm("Email has been uploaded successfully. Do you want to continue to the next page?")) {
            this.router.navigate(['/new-email']);
          }
        },
        (error) => {
          console.error('Failed to create contact', error);
        }
      );
    }
  }
  onCancel(): void{
    if(window.confirm('Are you sure?')){
      this.router.navigate(['/contacts']);
    }
  }

}
