import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CostosComponent } from './components/costos/costos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { TpedidosComponent } from './components/tpedidos/tpedidos.component';
import { VerCiudadesComponent } from './components/ver-ciudades/ver-ciudades.component';
import { VerCostosComponent } from './components/ver-costos/ver-costos.component';


// Imports de diseño

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './components/clientes/clientes.component';
import {MatSelectModule} from '@angular/material/select';
import { LoginComponent } from './components/login/login.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { AgregarCiudadComponent } from './components/agregar-ciudad/agregar-ciudad.component';
import { EditarCiudadComponent } from './components/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './components/eliminar-ciudad/eliminar-ciudad.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { EditarCostosComponent } from './components/editar-costos/editar-costos.component';
import { AgregarCostoComponent } from './components/agregar-costo/agregar-costo.component';
import { PedidorealizadoComponent } from './components/pedidorealizado/pedidorealizado.component';
import { EstadoPedidoComponent } from './components/estado-pedido/estado-pedido.component';
import { EliminarciudadComponent } from './components/eliminarciudad/eliminarciudad.component';
import { EliminarclienteComponent } from './components/eliminarcliente/eliminarcliente.component';
import { EliminarcostoComponent } from './components/eliminarcosto/eliminarcosto.component';
import { EliminarvolumenComponent } from './components/eliminarvolumen/eliminarvolumen.component';
import { EliminartrackerComponent } from './components/eliminartracker/eliminartracker.component';
import {MatTableModule} from '@angular/material/table';
import{HttpClientModule} from '@angular/common/http';
import { EditarPedidoComponent } from './components/editar-pedido/editar-pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    CiudadesComponent,
    InicioComponent,
    CostosComponent,
    NavbarComponent,
    PedidosComponent,
    TpedidosComponent,
    VerCiudadesComponent,
    VerCostosComponent,
    ClientesComponent,
    LoginComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    AgregarCiudadComponent,
    EditarCiudadComponent,
    EliminarCiudadComponent,
    MenuAdminComponent,
    EditarCostosComponent,
    AgregarCostoComponent,
    PedidorealizadoComponent,
    EstadoPedidoComponent,
    EliminarciudadComponent,
    EliminarclienteComponent,
    EliminarcostoComponent,
    EliminarvolumenComponent,
    EliminartrackerComponent,
    EditarPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
   
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
