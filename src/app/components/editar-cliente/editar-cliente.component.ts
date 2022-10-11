import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EditarCliente } from 'src/app/models/EditarCliente';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';


@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.scss']
})
export class EditarClienteComponent implements OnInit {
  datos$:string=""
  formGroup: FormGroup = new FormGroup({ })
  constructor(
    private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router
  ) { 


    this.formGroup = this.fb.group({
      Nombre_cliente:'',
      Tienda:''
      
    })

    this.share.getobtenerIDcliente().subscribe((x:string)=>{
      this.datos$=x
  
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

  editarCliente(){
  
    let cliente = new EditarCliente(
      this.formGroup.controls['Nombre_cliente'].value,
      this.formGroup.controls['Tienda'].value
      
    );

  this.backend.editarCliente(this.datos$,cliente).subscribe(x =>{
    console.log("Respuesta: "+ x);
    alert(x.mensaje);
    this.borrarFormulario();
  })

}
}
