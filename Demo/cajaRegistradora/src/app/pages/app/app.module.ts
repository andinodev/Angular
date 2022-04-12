import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoComponent } from 'src/app/components/carrito/carrito.component';
import { ProductosComponent } from 'src/app/components/productos/productos.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [
    AppComponent,
    CarritoComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzGridModule
  ]
})
export class AppModule { }
