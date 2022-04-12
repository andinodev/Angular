import { NgModule } from '@angular/core';
import { AndinoToolsDirective } from 'src/app/directives/andino-tools.directive';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule],
  declarations: [WelcomeComponent,AndinoToolsDirective],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
