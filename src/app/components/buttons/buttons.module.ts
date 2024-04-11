import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueButtonComponent } from './blue-button/blue-button.component';
import { TransparentButtonComponent } from './transparent-button/transparent-button.component';
import { WhiteButtonComponent } from './white-button/white-button.component';
import { BwButtonComponent } from './bw-button/bw-button.component';

@NgModule({
  declarations: [
    BlueButtonComponent,
    TransparentButtonComponent,
    WhiteButtonComponent,
    BwButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    BlueButtonComponent,
    TransparentButtonComponent,
    WhiteButtonComponent,
    BwButtonComponent
  ]
})
export class ButtonsModule { }
