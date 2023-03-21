import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactDetail } from 'src/app/_models/contact';
import { ContactEmail } from 'src/app/_models/email';
import { ContactSocial } from 'src/app/_models/social';
import { ContactServiceService } from 'src/app/_services/contact-service.service';



@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactDetail: ContactDetail = {
    id: undefined,
    name: '',
    phone_number: '',
    address: '',
    city_state: '',
    reference: '',
    socials: [] as ContactSocial[],
    emails: [] as ContactEmail[],
  };

  constructor(private route: ActivatedRoute, 
    private contactService: ContactServiceService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactDetails(id).subscribe((data) => {
      console.log(data, "DATA")
      this.contactDetail.id = data.id;
      this.contactDetail.name = data.name;
      this.contactDetail.phone_number = data.phone_number;
      this.contactDetail.address = data.address;
      this.contactDetail.city_state = data.city_state;
      this.contactDetail.reference = data.reference;
      this.contactDetail.emails = data.emails;
      this.contactDetail.socials = data.socials;
    });
  }
  removeContact(){
    if (window.confirm('Are you sure you want to delete this item?')) {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.deleteContact(id).subscribe(
      (response) => {
        console.log(response, "Successfully Deleted")
        this.router.navigate(['/contacts']);
      },
      (error) => {
        console.log(error, "Error")
      })
    }
  }

}
