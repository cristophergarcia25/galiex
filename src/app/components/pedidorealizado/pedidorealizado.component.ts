import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { pedido } from 'src/app/models/Pedido';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';
@Component({
  selector: 'app-pedidorealizado',
  templateUrl: './pedidorealizado.component.html',
  styleUrls: ['./pedidorealizado.component.scss']
})
export class PedidorealizadoComponent implements OnInit {
  dataSource= new MatTableDataSource(new Array<pedido>());
  displayedColumns=[
  'ID_currier',
  'ID_tracker_tienda',
  'Destinatario',
  'Direccion',
  'Estado',
  'ID_costo',
  'ID_volumen',
  'ID_origen',
  'ID_destino',
  'ID_cliente',
  'editar',
  'eliminar']


  constructor( private share : ShareDataService,
    private backend: BackendService,
    private route:Router) { }


  ngOnInit(): void {
    this.backend.obtenerPedido().subscribe(x=>{
      this.dataSource.data = x.datos;
    })
  }

  editarPedido(ID_cliente:string){
    this.share.setID_cliente(ID_cliente)  ;
    this.route.navigateByUrl("/editarpedido")



}

  eliminarPedido(Destinatario:string){
    console.log(Destinatario)
    this.backend.eliminarPedido(Destinatario).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      this.backend.obtenerPedido().subscribe( x => {
        this.dataSource.data = x.datos;
      })
     });
  }
    

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
