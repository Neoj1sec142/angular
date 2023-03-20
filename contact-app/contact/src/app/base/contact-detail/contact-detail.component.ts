import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/_models/contact';
import { ContactEmail } from 'src/app/_models/email';
import { ContactSocial } from 'src/app/_models/social';
import { ContactServiceService } from 'src/app/_services/contact-service.service';



interface ContactDetail{
  contact: Contact,
  emails?: ContactEmail[],
  socials: ContactSocial[]
}

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contactDetail!: ContactDetail
  @Input()
  detail!: Contact;
  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  constructor(private route: ActivatedRoute, private contactService: ContactServiceService) { }
  onRemove(){
    this.remove.emit(this.detail)
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contactService.getContactDetails(id).subscribe((data) => {
      console.log(data)
    });
  }

}
