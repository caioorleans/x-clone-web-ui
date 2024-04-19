import { Component, Input} from '@angular/core';
import { BasicButtonComponent } from '../basic-button/basic-button.component';

@Component({
  selector: 'app-transparent-button',
  standalone: false,
  templateUrl: '../basic-button/basic-button.component.html',
})
export class TransparentButtonComponent extends BasicButtonComponent{
  constructor(){
    super()
    this.class = "w-full text-xblue bg-transparent border border-gray-border focus:outline-none hover:bg-trs-btn-hover dark:hover:bg-trs-btn-dark-hover focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-2.5"
  }
}
