import { Component, ContentChildren, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { Contact } from 'src/app/_models/contact';
import { ContactServiceService } from 'src/app/_services/contact-service.service';
import { ContactDetailComponent } from '../contact-detail/contact-detail.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts!: Contact[];
  @ViewChildren('contactRef') contactRef!: ElementRef
  @ContentChildren(ContactDetailComponent) contentList!: any;
  constructor(private contactService: ContactServiceService) { }
  
  ngOnInit() {
    this.contactService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    })
  }

}
