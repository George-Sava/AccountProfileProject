import { NavbarComponentComponent} from './navbar-component/navbar-component.component';
export let activeAc: number = 0;

export function  account(id: any)
  {
      switch(id)
      {
        case 1:
          activeAc = 1;
          break;
        case 2:
          activeAc = 2;
          break;
        case 3:
          activeAc = 3;
          break;
      }
  }