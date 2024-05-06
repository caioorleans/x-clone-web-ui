import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account-page',
  standalone: false,
  templateUrl: './create-account-page.component.html'
})
export class CreateAccountPageComponent {

  isPart1:boolean = true

  goNext = () =>{
    if(this.isPart1){
      this.isPart1 = false
    }
    else{

    }
  }

}
