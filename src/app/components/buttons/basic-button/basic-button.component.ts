import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-button',
  standalone: false,
  templateUrl: 'basic-button.component.html'
})
export class BasicButtonComponent {
  @Input()
  text:string = ""

  @Input()
  isActive:boolean = true

  @Input()
  isLoading:boolean = false

  class:string = ""
}
