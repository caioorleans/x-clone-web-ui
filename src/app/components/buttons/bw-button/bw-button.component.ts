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
    this.class = "text-white dark:text-black bg-black dark:bg-white hover:bg-xdark-gray-font dark:hover:bg-btn-hover dark:focus:ring-blue-800"
  }
}
