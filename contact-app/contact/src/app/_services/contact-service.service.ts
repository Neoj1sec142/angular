import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, ContactName } from '../_models/contact';
const CONTACTS_API = 'http://localhost:8000/contacts'
const CONTACTNAME_API = 'http://localhost:8000/contacts-names'
const CONTACT_API = 'http://localhost:8000/contact'
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

constructor(private http: HttpClient) { }

getContactDetails(id: any){
  return this.http.get<Contact>(`${CONTACT_API}/${id}/`)
}
getContacts(): Observable<Contact[]>{
  return this.http.get<Contact[]>(`${CONTACTS_API}/`)
}

getContactsNames(): Observable<ContactName[]>{
  return this.http.get<ContactName[]>(`${CONTACTNAME_API}/`)
}
contactRUD(id: any): Observable<Contact[]>{
  return this.http.get<Contact[]>(`${CONTACTS_API}/${id}/`)
}
createContact(contact: Contact): Observable<Contact> {
  return this.http.post<Contact>(`${CONTACTS_API}/`, contact);
}

updateContact(id: number, contact: Contact): Observable<Contact> {
  return this.http.put<Contact>(`${CONTACTS_API}/${id}/`, contact);
}

deleteContact(id: number): Observable<any> {
  return this.http.delete(`${CONTACTS_API}/${id}/`);
}

}
