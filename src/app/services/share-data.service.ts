import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ciudad } from '../models/Ciudad';
import { cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root'
})


export class ShareDataService {
  private Cod_postal = new BehaviorSubject<string>("");
  private ID_cliente = new BehaviorSubject<string>("");
  currentpostal= this.Cod_postal.asObservable();
  currentcliente= this.ID_cliente.asObservable();


  private listadoCiudadesSource= new BehaviorSubject<Array<Ciudad>>([]);
  private listadoClientesSource= new BehaviorSubject<Array<cliente>>([]);
  currentlistadoCiudad= this.listadoCiudadesSource.asObservable();
  currentlistadoCliente= this.listadoClientesSource.asObservable();
  constructor() {


   }

  setCod_postal(listado:string){
    this.Cod_postal.next(listado)
  }


  getobtenerPostal(){
    return this.currentpostal;

  }

  setID_cliente(listado:string){
    this.ID_cliente.next(listado)
  }

  getobtenerIDcliente(){
    return this.currentcliente;

  }

}

