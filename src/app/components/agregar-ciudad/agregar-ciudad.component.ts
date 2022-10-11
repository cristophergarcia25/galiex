import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Ciudad} from 'src/app/models/Ciudad';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-agregar-ciudad',
  templateUrl: './agregar-ciudad.component.html',
  styleUrls: ['./agregar-ciudad.component.scss']
})
export class AgregarCiudadComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({ })
  listado=new Array<Ciudad>();
 

  constructor(
    private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router) { 

    
    this.formGroup = this.fb.group({
      Codigo_postal: '',
      Ciudad:''
      
    })

  }

  ngOnInit(): void {
  }

  borrarFormulario(){
    this.formGroup.patchValue({
      Codigo_postal: '',
      Ciudad:''
      
    })
  }



 guardarCiudad(){
  
  let ciudad = new Ciudad(
    this.formGroup.controls['Codigo_postal'].value,
    this.formGroup.controls['Ciudad'].value
    
  );


  

  this.backend.insertarCiudad(ciudad).subscribe(x =>{
    console.log("Respuesta: "+ x);
    alert(x.mensaje);
    this.borrarFormulario();
  })
  }

}
