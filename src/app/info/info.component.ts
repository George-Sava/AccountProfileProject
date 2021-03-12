import { Component, Input, OnInit } from '@angular/core';
import { PersonDATA } from '../experienceData';
import { NavbarComponentComponent } from '../navbar-component/navbar-component.component';
import {Person} from'../person';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  allData: Person[] = PersonDATA;
  activeAccount : number | string;
  @Input() set acAccount(value : number | string){
    this.activeAccount = value;
    this.checkAccount();
  }
  person!: Person;

  

  

  constructor() { 
    this.activeAccount = 1
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

  ngOnInit(): void {
    this.person = this.allData[0];
  }

}
