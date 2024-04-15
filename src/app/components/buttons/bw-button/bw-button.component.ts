import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bw-button',
  standalone: false,
  template: `
    <button type="button" class="w-full text-white dark:text-black bg-black dark:bg-white hover:bg-xdark-gray-font dark:hover:bg-btn-hover focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
      {{text}}
    </button>
  `,
})
export class BwButtonComponent {

  @Input()
  text?:string
}
