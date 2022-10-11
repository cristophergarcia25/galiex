import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarCiudadComponent } from './components/agregar-ciudad/agregar-ciudad.component';
import { AgregarClienteComponent } from './components/agregar-cliente/agregar-cliente.component';
import { AgregarCostoComponent } from './components/agregar-costo/agregar-costo.component';
import { CiudadesComponent } from './components/ciudades/ciudades.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CostosComponent } from './components/costos/costos.component';
import { EditarCiudadComponent } from './components/editar-ciudad/editar-ciudad.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { EditarCostosComponent } from './components/editar-costos/editar-costos.component';
import { EditarPedidoComponent } from './components/editar-pedido/editar-pedido.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { MenuAdminComponent } from './components/menu-admin/menu-admin.component';
import { PedidorealizadoComponent } from './components/pedidorealizado/pedidorealizado.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { TpedidosComponent } from './components/tpedidos/tpedidos.component';
import { VerCiudadesComponent } from './components/ver-ciudades/ver-ciudades.component';
import { VerCostosComponent } from './components/ver-costos/ver-costos.component';

const routes: Routes = [
{path: '', component: InicioComponent },
{path: 'pedidos', component: PedidosComponent },
{path: 'login', component: LoginComponent },
{path: 'tpedidos', component: TpedidosComponent },
{path: 'ciudades', component: CiudadesComponent },
{path: 'verciudades',component: VerCiudadesComponent },
{path: 'clientes',component: ClientesComponent },
{path: 'costos',component: CostosComponent },
{path: 'vercostos',component: VerCostosComponent },
{path: 'agregarcliente',component: AgregarClienteComponent },
{path: 'editarcliente',component: EditarClienteComponent },
{path: 'editarpedido', component: EditarPedidoComponent},
{path: 'agregarciudad',component: AgregarCiudadComponent},
{path: 'editarciudad',component: EditarCiudadComponent },
{path: 'editarcosto',component: EditarCostosComponent },
{path: 'agregarcosto',component: AgregarCostoComponent },
{path: 'menuadmin',component: MenuAdminComponent },
{path: 'pedidorealizado',component: PedidorealizadoComponent },
{path: 'pedidorealizado',component: PedidorealizadoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
