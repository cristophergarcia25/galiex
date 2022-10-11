import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Router } from '@angular/router';
import { pedido } from 'src/app/models/Pedido';
import { Pedidos } from 'src/app/models/Pedidos';
@Component({
  selector: 'app-tpedidos',
  templateUrl: './tpedidos.component.html',
  styleUrls: ['./tpedidos.component.scss']
})
export class TpedidosComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({ })
  arrPedido: Array<Pedidos>=[]

  constructor( private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router) { 

      this.formGroup = this.fb.group({
        ID_currier: 0
        
      })
    }

  ngOnInit(): void {
    
  }

  borrarFormulario(){
    this.formGroup.patchValue({
      ID_currier: ''
      
    })
  }


  consultarpedido(){
    this.backend.obtenerPedidoId(this.formGroup.controls['ID_currier'].value).subscribe(x =>{
      console.log(x.datos)
      this.arrPedido = x.datos;
      

    })
  }



}
