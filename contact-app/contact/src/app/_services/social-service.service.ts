import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactSocial } from '../_models/social';
const SOCIALS_API = 'http://localhost:8000/contact-socials'
@Injectable({
  providedIn: 'root'
})
export class SocialServiceService {

constructor(private http: HttpClient) { }

addSocial(social: ContactSocial): Observable<ContactSocial> {
  return this.http.post<ContactSocial>(`${SOCIALS_API}/`, social);
}

updateSocial(id: number, social: ContactSocial): Observable<ContactSocial> {
  return this.http.put<ContactSocial>(`${SOCIALS_API}/${id}/`, social);
}

deleteSocial(id: number): Observable<any> {
  return this.http.delete(`${SOCIALS_API}/${id}/`);
}

}
