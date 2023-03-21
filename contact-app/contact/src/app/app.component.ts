import { Component } from '@angular/core';

interface Nav {
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact';
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    },
    {
      link: '/contacts',
      name: 'Contacts',
      exact: true
    },
    {
      link: 'new-contact',
      name: 'Add Contact',
      exact: true
    },
    {
      link: 'new-email',
      name: 'Add Email',
      exact: true
    },
    {
      link: 'new-social',
      name: 'Add Social',
      exact: true
    }
  ]
}
