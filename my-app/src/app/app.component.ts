import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  imgSrc: string = "https://static.onecms.io/wp-content/uploads/sites/47/2021/04/13/kitten-pounce-158906394-2000.jpg";
  favAnimal: string = "kitty";
  constructor(){
    this.title = "Neos-1st-Angular-App"
  }
}
