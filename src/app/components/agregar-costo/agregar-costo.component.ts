import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { costos } from 'src/app/models/Costos';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';
@Component({
  selector: 'app-agregar-costo',
  templateUrl: './agregar-costo.component.html',
  styleUrls: ['./agregar-costo.component.scss']
})
export class AgregarCostoComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({ })
  listado=new Array<costos>();
 
  constructor(
    private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router
  ) 
  {

    this.formGroup = this.fb.group({
      ID_origen: '',
      ID_destino:'',
      Costo:''
      
    })

   }

  ngOnInit(): void {
  }
  borrarFormulario(){
    this.formGroup.patchValue({
      ID_origen:'',
      ID_destino:'',
      Costo:''
      
    })
  }


  guardarCosto(){
  
    let Costos = new costos(
      this.formGroup.controls['ID_origen'].value,
      this.formGroup.controls['ID_destino'].value,
      this.formGroup.controls['Costo'].value
      
    );

    this.backend.insertarCostos(Costos).subscribe(x =>{
      console.log("Respuesta: "+ x);
      alert(x.mensaje);
      this.borrarFormulario();
    })
    }
}
