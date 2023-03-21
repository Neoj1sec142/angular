import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactDetail } from 'src/app/_models/contact';
import { ContactEmail } from 'src/app/_models/email';
import { ContactSocial } from 'src/app/_models/social';
import { ContactServiceService } from 'src/app/_services/contact-service.service';
import { EmailServiceService } from 'src/app/_services/email-service.service';
import { SocialServiceService } from 'src/app/_services/social-service.service';



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
    private emailService: EmailServiceService,
    private socialService: SocialServiceService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactDetails(id).subscribe((data) => {
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
        this.router.navigate(['/contacts']);
      },
      (error) => {
        console.log(error, "Error")
      })
    }
  }
  removeEmail(id: any){
    this.emailService.deleteEmail(id).subscribe(
      (response) => {
        this.router.navigate(['/contacts'])
      },
      (error) => console.log(error, "error"))
  }
  removeSocial(id: any){
    this.socialService.deleteSocial(id).subscribe(
      (response) => {
        this.router.navigate(['/contacts'])
      },
      (error) => console.log(error, "error"))
  }

}
