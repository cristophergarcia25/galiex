import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { EditarCiudad } from 'src/app/models/EditarCiudad';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';



@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.scss']
})
export class EditarCiudadComponent implements OnInit {

  datos$:string=""
  formGroup: FormGroup = new FormGroup({ })
 
 
  constructor(
    private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router
  ) {
    this.formGroup = this.fb.group({
      Ciudad:''
      
    })

  this.share.getobtenerPostal().subscribe((x:string)=>{
    this.datos$=x

  })

   }

  ngOnInit(): void {
  }


  borrarFormulario(){
    this.formGroup.patchValue({
      Ciudad:''
      
    })
  }


  editarCiudad(){
  
    let ciudad = new EditarCiudad(
      this.formGroup.controls['Ciudad'].value
      
    );
  this.backend.editarCiudad(this.datos$,ciudad).subscribe(x =>{
    console.log("Respuesta: "+ x);
    alert(x.mensaje);
    this.borrarFormulario();
  })

}
}