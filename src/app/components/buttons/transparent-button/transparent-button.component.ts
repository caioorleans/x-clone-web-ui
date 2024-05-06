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
    this.class = "text-xblue bg-transparent border border-gray-border hover:bg-trs-btn-hover dark:hover:bg-trs-btn-dark-hover"
  }
}
