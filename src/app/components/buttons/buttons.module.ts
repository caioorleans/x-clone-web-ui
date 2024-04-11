import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { TransparentButtonComponent } from './transparent-button/transparent-button.component';
import { WhiteButtonComponent } from './white-button/white-button.component';

@NgModule({
  declarations: [
    BlueButtonComponent,
    TransparentButtonComponent,
    WhiteButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    BlueButtonComponent,
    TransparentButtonComponent,
    WhiteButtonComponent
  ]
})
export class ButtonsModule { }
