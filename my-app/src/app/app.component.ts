import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  imgSrc: string = "https://static.onecms.io/wp-content/uploads/sites/47/2021/04/13/kitten-pounce-158906394-2000.jpg";
  constructor(){
    this.title = "Neos-1st-Angular-App"
  }
}
