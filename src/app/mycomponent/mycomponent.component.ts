import { Component } from '@angular/core';


@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.scss']
  
})
export class MycomponentComponent {
  hideList(){
    this.isVisible = !this.isVisible;
  }
  selectedOption: string = ""
  myText: string = "om"
  name : string ="om"
  friendslist = [
    {
      name: 'Om',
      age: 25
    },
    {
      name: 'Nishant',
      age: 45
    },
    {
      name: 'Pushkar',
      age: 36
    },
    {
      name: 'Atharva',
      age: 65
    },
    {
      name: 'Ashish',
      age: 12
    },
    {
      name: 'Uday',
      age: 31
    },
    {
      name: 'Mayank',
      age: 45
    },
    {
      name: 'Raju',
      age: 74
    },
  ]
  isVisible: boolean = true;

}
