import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    private contactService: ContactServiceService) { }

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
      address: this.contactForm.value.address, // set other properties of Contact as needed
      city_state: this.contactForm.value.city_state,
      reference: '', // set an empty array or populate with data as needed
      }
  
      this.contactService.createContact(contact).subscribe(
        (response) => {
          console.log('Contact created successfully', response);
          // perform any additional actions needed after creating the contact
        },
        (error) => {
          console.error('Failed to create contact', error);
          // handle error as needed
        }
      );
    }
  }

}
