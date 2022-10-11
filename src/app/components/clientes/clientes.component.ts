import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { cliente } from 'src/app/models/Cliente';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})

export class ClientesComponent implements OnInit {

  dataSource=new MatTableDataSource(new Array<cliente>());
  displayedColumns =['ID_cliente','Nombre_cliente','Tienda','editar','eliminar']
  constructor(private share: ShareDataService,
    private backend: BackendService,
    private route: Router) { }

  ngOnInit(): void {

    this.backend.obtenerCliente().subscribe(x=>{
      this.dataSource.data = x.datos;
    })
  }

  editarCliente(ID_cliente:string){
    this.share.setID_cliente(ID_cliente)  ;
    this.route.navigateByUrl("/editarcliente")



}
  eliminarCliente(ID_cliente:number){
    console.log(ID_cliente)
    this.backend.eliminarCliente(ID_cliente).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      this.backend.obtenerCliente().subscribe( x => {
        this.dataSource.data = x.datos;
      })
     });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
