import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { EventsComponent } from './events/events.component';
import { RegresiveComponent } from './components/regresive/regresive.component';
import { GetListComponent } from './components/get-list/get-list.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AlertsComponent } from './components/alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    PadreComponent,
    HijoComponent,
    EventsComponent,
    RegresiveComponent,
    GetListComponent,
    CalculatorComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
