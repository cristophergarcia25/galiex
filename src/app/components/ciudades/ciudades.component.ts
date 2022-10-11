import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Ciudad } from 'src/app/models/Ciudad';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { EliminarClienteComponent } from '../eliminar-cliente/eliminar-cliente.component';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})

export class CiudadesComponent implements OnInit {
  dataSource = new MatTableDataSource(new Array<Ciudad>());
  displayedColumns =['Ciudad','Codigo_Postal','editar',
  'eliminar']

  constructor(private share: ShareDataService,
    private backend: BackendService,
    private route: Router ) { }

  ngOnInit(): void {
    this.backend.obtenerCiudad().subscribe(x=>{
      this.dataSource.data = x.datos;
    })

  
  }
  

  editarCiudad(Codigo_Postal:string){
    this.share.setCod_postal(Codigo_Postal)  ;
    this.route.navigateByUrl("/editarciudad")



}
  eliminarCiudad(Codigo_Postal:string){
    console.log(Codigo_Postal)
    this.backend.eliminarCiudad(Codigo_Postal).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      this.backend.obtenerCiudad().subscribe( x => {
        this.dataSource.data = x.datos;
      })
     });
  }
    
    
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
