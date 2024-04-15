import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-white-button',
  standalone: false,
  template: `
    <button type="button" class="w-full text-gray-900 bg-white border border-gray-border focus:outline-none hover:bg-btn-hover focus:ring-4 focus:ring-gray-100 font-bold rounded-full text-sm px-5 py-2.5">
      {{text}}
    </button>
  `
})
export class WhiteButtonComponent {

  @Input()
  text?:string
}
