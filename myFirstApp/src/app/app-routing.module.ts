import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CvComponent } from './components/cv/cv.component';
import { DetalleEmpleadoComponent } from './components/detalle-empleado/detalle-empleado.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RandomGuard } from './random.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {path: 'welcome', component: WelcomeComponent, canActivate: [RandomGuard]},
  //{ path: 'empleados', component: DetalleEmpleadoComponent},
  { path: 'empleados/:empleadoId', component: DetalleEmpleadoComponent, children: [
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'cv', component: CvComponent},
    {path: 'exp', component: ExperienciaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
