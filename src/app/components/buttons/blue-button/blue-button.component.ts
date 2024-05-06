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
    this.class = "text-white bg-xblue hover:bg-blue-btn-hover dark:focus:ring-blue-800"
  }
}
