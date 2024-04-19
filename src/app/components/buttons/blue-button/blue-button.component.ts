import { Component} from '@angular/core';
import { BasicButtonComponent } from '../basic-button/basic-button.component';

@Component({
  selector: 'app-blue-button',
  standalone: false,
  templateUrl: '../basic-button/basic-button.component.html',
})
export class BlueButtonComponent extends BasicButtonComponent{
  constructor(){
    super()
    this.class = "w-full text-white bg-xblue hover:bg-blue-btn-hover focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
  }
}
