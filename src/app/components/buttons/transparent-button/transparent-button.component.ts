import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-transparent-button',
  standalone: false,
  template: `
    <button type="button" class="mt-4 w-full text-xblue bg-transparent border border-gray-border focus:outline-none hover:bg-trs-btn-hover dark:hover:bg-trs-btn-dark-hover focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2">
      {{text}}
    </button>
  `
})
export class TransparentButtonComponent {
  @Input()
  text?:string
}
