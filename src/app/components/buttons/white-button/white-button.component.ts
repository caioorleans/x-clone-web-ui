import { Component, Input } from '@angular/core';
import { BasicButtonComponent } from '../basic-button/basic-button.component';

@Component({
  selector: 'app-white-button',
  standalone: false,
  templateUrl: '../basic-button/basic-button.component.html',
})
export class WhiteButtonComponent extends BasicButtonComponent{
  constructor(){
    super()
    this.class = "w-full text-gray-900 bg-white border border-gray-border focus:outline-none hover:bg-btn-hover focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-2.5"
  }
}
