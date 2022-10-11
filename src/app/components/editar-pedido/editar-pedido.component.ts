import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EditarPedido } from 'src/app/models/EditarPedido';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';
@Component({
  selector: 'app-editar-pedido',
  templateUrl: './editar-pedido.component.html',
  styleUrls: ['./editar-pedido.component.scss']
})
export class EditarPedidoComponent implements OnInit {


  
  datos$:string=""
  formGroup: FormGroup = new FormGroup({ })
 
 
  constructor(
    private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router
    ) { 
      this.formGroup = this.fb.group({

        Estado:''

      })

      this.share.getobtenerIDcliente().subscribe((x:string)=>{
        this.datos$=x
    
      })
    }

  ngOnInit(): void {
  }
  borrarFormulario(){
    this.formGroup.patchValue({

      Estado:''

    })
  }


  editarPedido(){
  
    let pedido = new EditarPedido(
      this.formGroup.controls['Estado'].value



      
    );

  this.backend.editarPedido(this.datos$,pedido).subscribe(x =>{
    console.log("Respuesta: "+ x);
    alert(x.mensaje);
    this.borrarFormulario();
  })

}


}
