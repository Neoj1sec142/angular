import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from 'src/app/_models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  @Input()
  detail!: Contact;
  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  constructor() { }
  onRemove(){
    this.remove.emit(this.detail)
  }
  ngOnInit() {
  }

}
