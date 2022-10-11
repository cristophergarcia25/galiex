import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ciudad } from '../models/Ciudad';
import { CiudadResponse } from '../models/CiudadResponse';
import { cliente } from '../models/Cliente';
import { ClienteResponse } from '../models/ClienteResponse';
import { costos } from '../models/Costos';
import { CostosResponse } from '../models/CostosResponse';
import { volumen } from '../models/Volumen';
import { VolumenResponse } from '../models/VolumenResponse';
import { pedido } from '../models/Pedido';
import { PedidoResponse } from '../models/PedidoResponse';
import { EditarCiudad } from '../models/EditarCiudad';
import { mostrarCosto } from '../models/MostrarCosto';
import { EditarCliente } from '../models/EditarCliente';
import { PedidosResponse } from '../models/PedidosResponse';
import { EditarPedido } from '../models/EditarPedido';



const BE_API = environment.api_backend;
const httpOptions = {headers: new HttpHeaders().set('Content-Type', 'application/json')};

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private httpClient: HttpClient) { }

  insertarCiudad(ciudad: Ciudad){
    console.log(BE_API + '/agregarciudad')
    console.log(ciudad);


    return this.httpClient.post<CiudadResponse>(BE_API + '/agregarciudad', ciudad ,httpOptions);

  }

  editarCiudad(Codigo_Postal:string, editarCiudad: EditarCiudad){
    return this.httpClient.put<CiudadResponse>(BE_API+'/ciudades/'+ Codigo_Postal, editarCiudad);

  }

  obtenerCiudad(){
    return this.httpClient.get<CiudadResponse>(BE_API + '/ciudades', httpOptions);

  }

  eliminarCiudad(Codigo_postal:string){
    return this.httpClient.delete<CiudadResponse>(BE_API+'/ciudades1/'+ Codigo_postal)
  }



  
  insertarCliente(cliente: cliente){
    console.log(BE_API + '/agregarcliente')
    console.log(cliente);


    return this.httpClient.post<ClienteResponse>(BE_API + '/agregarcliente', cliente ,httpOptions);

  }
  obtenerCliente(){
    return this.httpClient.get<ClienteResponse>(BE_API + '/clientes', httpOptions);

  }

  editarCliente(ID_cliente:string, editarCliente: EditarCliente){
    return this.httpClient.put<ClienteResponse>(BE_API+'/clientes/'+ ID_cliente, editarCliente);

  }

  eliminarCliente(ID_cliente:number){
    return this.httpClient.delete<ClienteResponse>(BE_API+'/clientes1/'+ ID_cliente)
  }
  
  insertarCostos(costos: costos){
    console.log(BE_API + '/agregarcosto')
    console.log(costos);


    return this.httpClient.post<CostosResponse>(BE_API + '/agregarcosto', costos ,httpOptions);

  }
  obtenerCostos(){
    return this.httpClient.get<CostosResponse>(BE_API + '/costos', httpOptions);

  }

  obtenerCosto(origen:string,destino:string){

    return this.httpClient.get<CostosResponse>(BE_API + '/costo/' + origen +'/'+ destino, httpOptions);

  }


  eliminarCosto(ID_costo:number){
    return this.httpClient.delete<CostosResponse>(BE_API+'/costos1/'+ ID_costo)
  }


  obtenerVolumen(){
    return this.httpClient.get<VolumenResponse>(BE_API + '/volumen', httpOptions);

  }

  obtenerVolPrecio(volumen: number){
    return this.httpClient.get<VolumenResponse>(BE_API + '/volumenes/'+ volumen , httpOptions);

  }

  insertarPedido(pedido: pedido){
    console.log(BE_API + '/pedido')
    console.log(pedido);


    return this.httpClient.post<PedidoResponse>(BE_API + '/pedido', pedido ,httpOptions);

  }

   obtenerPedido(){
    return this.httpClient.get<PedidoResponse>(BE_API + '/pedidorealizado', httpOptions);

  }

  obtenerPedidoId(ID_currier:number){
    return this.httpClient.get<PedidosResponse>(BE_API + '/pedidorealizado/' + ID_currier, httpOptions);

  }


  editarPedido(ID_currier:string, editarPedido: EditarPedido){
    return this.httpClient.put<ClienteResponse>(BE_API+'/pedidorealizado/'+ ID_currier, editarPedido);

  }

  eliminarPedido(Destinatario:string){
    return this.httpClient.delete<CostosResponse>(BE_API+'/pedidorealizado1/'+ Destinatario)
  }


}
