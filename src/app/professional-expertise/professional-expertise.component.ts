import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Person } from '../person'
import { PersonDATA } from '../experienceData';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import { ProfilePictureComponent} from '../profile-picture/profile-picture.component'

@Component({
  selector: 'app-professional-expertise',
  templateUrl: './professional-expertise.component.html',
  styleUrls: ['./professional-expertise.component.css']
})
export class ProfessionalExpertiseComponent implements OnInit {

  allData: Person[] = PersonDATA;
  activeAccount : number | string;
  @Input() set acAccount(value : number | string){
    this.activeAccount = value;
    this.checkAccount();
  }
  
  person : Person;
  

  constructor() { 
    this.person = new Person();
    this.activeAccount = 2;
  }

  ngOnInit(): void {
    this.checkAccount();
    console.log(this.activeAccount + 'ok');
  }

  checkAccount(): any
  {
    if(this.activeAccount === 1)
    {
        this.person = this.allData[0];
    }
    else if(this.activeAccount === 2)
    {
      this.person = this.allData[1];
    }
    else if(this.activeAccount === 3)
    {
      this.person = this.allData[2];
    }
  }

  
}
