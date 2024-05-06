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
    this.class = "text-gray-900 bg-white border border-gray-border hover:bg-btn-hover"
  }
}
