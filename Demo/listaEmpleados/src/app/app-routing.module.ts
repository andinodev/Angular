import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './pages/empleado/empleado.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'app'},
  {path:'app',component:EmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
