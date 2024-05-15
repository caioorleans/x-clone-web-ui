import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  isModalHidden = true;

  constructor() { }

  
  showModal(){this.isModalHidden = false}
  hideModal(){this.isModalHidden = true}
}
