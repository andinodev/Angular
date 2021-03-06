import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo/saludo.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { EventsComponent } from './events/events.component';
import { RegresiveComponent } from './components/regresive/regresive.component';
import { GetListComponent } from './components/get-list/get-list.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { FormsComponent } from './components/forms/forms.component';
import { ListsComponent } from './components/lists/lists.component';
import { SemaforoComponent } from './semaforo/semaforo.component';
import { BuclesComponent } from './components/bucles/bucles.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { CvComponent } from './components/cv/cv.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';

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
    AlertsComponent,
    FormsComponent,
    ListsComponent,
    SemaforoComponent,
    BuclesComponent,
    SwitchComponent,
    ExperienciaComponent,
    ProyectosComponent,
    CvComponent,
    DetalleEmpleadoComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
