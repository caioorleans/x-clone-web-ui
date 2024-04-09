import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blue-button',
  standalone: false,
  template: `
    <button type="button" class="w-full text-white bg-xblue hover:bg-blue-btn-hover focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-blue-800">
      {{text}}
    </button>
  `,
})
export class BlueButtonComponent {

  @Input()
  text?:string
}
