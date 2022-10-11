import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { cliente } from 'src/app/models/Cliente';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.scss']
})
export class AgregarClienteComponent implements OnInit {

  formGroup: FormGroup= new FormGroup({})
  listadoCliente= new Array<cliente>();
  constructor(
    private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router) {

      this.formGroup= this.fb.group({
        Nombre_cliente:'',
        Tienda:''
      })

     }

  ngOnInit(): void {
  }

  
  borrarFormulario(){
    this.formGroup.patchValue({
      Nombre_cliente:'',
        Tienda:''
    })
  }


  guardarCliente(){

    let Cliente = new cliente(
      this.formGroup.controls['Nombre_cliente'].value,
      this.formGroup.controls['Tienda'].value
      
    );
  
    this.backend.insertarCliente(Cliente).subscribe(x =>{
      console.log("Respuesta: "+ x);
      alert(x.mensaje);
      this.borrarFormulario();
    })
  }

}
