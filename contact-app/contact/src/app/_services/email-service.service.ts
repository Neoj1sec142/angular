import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactEmail } from '../_models/email';
const EMAILS_API = 'http://localhost:8000/contact-emails'
@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

constructor(private http: HttpClient) { }



addEmail(email: ContactEmail): Observable<ContactEmail> {
  return this.http.post<ContactEmail>(`${EMAILS_API}/`, email);
}

deleteEmail(id: number): Observable<any> {
  return this.http.delete(`${EMAILS_API}/${id}/`);
}

}
