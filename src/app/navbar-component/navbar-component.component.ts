import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { PersonDATA } from '../experienceData'

@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.css']
})
export class NavbarComponentComponent {

  personData = PersonDATA;
  
  // public activeAc: number = 0;
    activeAc: number = 1;

  account(id: number)
  {
    console.log(id);
      switch(id)
      {
        case 1:
          this.activeAc = 1;
          break;
        case 2:
          this.activeAc = 2;
          break;
        case 3:
          this.activeAc = 3;
          break;
      }
  }

  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
