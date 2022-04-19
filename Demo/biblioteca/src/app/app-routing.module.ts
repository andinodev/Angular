import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritoresComponent } from './components/escritores/escritores.component';
import { EscritorComponent } from './pages/escritor/escritor.component';
import { LibroComponent } from './components/libro/libro.component';

const routes: Routes = [
  {path: '' , pathMatch: 'full', redirectTo: 'escritores'},
  {path:'escritores',component:EscritoresComponent},
  {path: 'escritores/:escritorId', component: EscritorComponent,children:[
    {path: 'libros', component: LibroComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
