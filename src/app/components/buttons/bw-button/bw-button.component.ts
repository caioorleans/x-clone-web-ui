import { Component, Input } from '@angular/core';
import { BasicButtonComponent } from '../basic-button/basic-button.component';

@Component({
  selector: 'app-bw-button',
  standalone: false,
  templateUrl: '../basic-button/basic-button.component.html',
})
export class BwButtonComponent extends BasicButtonComponent{
  constructor(){
    super()
    this.class = "w-full text-white dark:text-black bg-black dark:bg-white hover:bg-xdark-gray-font dark:hover:bg-btn-hover focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
  }
}
