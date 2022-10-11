import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { costos } from 'src/app/models/Costos';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-costos',
  templateUrl: './costos.component.html',
  styleUrls: ['./costos.component.scss']
})
export class CostosComponent implements OnInit {


  dataSource = new MatTableDataSource(new Array<costos>());
  displayedColumns=['ID_costo','ID_origen','ID_destino','Costo','editar','eliminar']

  constructor( private share: ShareDataService,
    private backend: BackendService) { }

  ngOnInit(): void {

    this.backend.obtenerCostos().subscribe(x=>{
      this.dataSource.data=x.datos

    })
  }

  eliminarCosto(ID_costo:number){
    console.log(ID_costo)
    this.backend.eliminarCosto(ID_costo).subscribe(x =>{
      console.log("Respuesta:" + x);
      alert(x.mensaje);
      this.backend.obtenerCostos().subscribe( x => {
        this.dataSource.data = x.datos;
      })
     });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
