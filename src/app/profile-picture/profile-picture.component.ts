import { Component, Input, OnInit } from '@angular/core';
import { PersonDATA } from '../experienceData';
import { Person } from '../person';
import {Paths} from '../picturePaths';

@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.css']
})
export class ProfilePictureComponent implements OnInit {

  allData: Person[] = PersonDATA;
  paths: Paths = new Paths;
  acAccount!: number | string;
  @Input() set activeAccount(value : number | string){
    this.acAccount = value;
    this.checkAccount();
  }
  
  person : Person;
  path: string | undefined;
  

  constructor() { 
    this.person = new Person();
    this.acAccount = 2;
  }

  ngOnInit(): void {
    this.checkAccount();
    console.log(this.acAccount + 'ok');
  }

  checkAccount(): any
  {
    if(this.acAccount === 1)
    {
        this.person = this.allData[0];
        this.path = this.paths.profilePicture1;
    }
    else if(this.acAccount === 2)
    {
      this.person = this.allData[1];
      this.path = this.paths.profilePicture2;
    }
    else if(this.acAccount === 3)
    {
      this.person = this.allData[2];
      this.path = this.paths.profilePicture3;
    }
  }

}
