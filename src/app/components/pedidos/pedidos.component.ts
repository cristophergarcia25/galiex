import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { pedido } from 'src/app/models/Pedido';
import { BackendService } from 'src/app/services/backend.service';
import { ShareDataService } from 'src/app/services/share-data.service';
import { costos } from 'src/app/models/Costos';
import { cliente } from 'src/app/models/Cliente';
import { mostrarCosto } from 'src/app/models/MostrarCosto';
import { volumen } from 'src/app/models/Volumen';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {
  res: number=0;
  numero= new Array<costos>();
  formGroup: FormGroup= new FormGroup({ })
  listado=new Array<pedido>();
  ID_Costo=new Array<costos>();
  arrCostos=new Array<costos>();
  arrCostoVol=new Array<volumen>();
  ID_Cliente=new Array<cliente>();
  sumaTotal =0;
  constructor(
    private fb: FormBuilder,
    private share: ShareDataService,
    private backend: BackendService,
    private router: Router
  ) { 
    
    this.formGroup = this.fb.group({

      Destinatario: '',
      Direccion:'',
      Estado:'',

      ID_volumen:0,
      ID_origen:'',
      ID_destino:'',
      ID_cliente:''

    })

  }

  ngOnInit(): void {
    this.backend.obtenerCostos().subscribe(costo=>{
      this.ID_Costo=costo.datos
  })
  this.backend.obtenerCliente().subscribe(cliente=>{
    this.ID_Cliente=cliente.datos  
  })
}



borrarFormulario(){
  this.formGroup.patchValue({

      Destinatario: '',
      Direccion:'',
      Estado:'',
 
      ID_volumen:0,
      ID_origen:'',
      ID_destino:'',
      ID_cliente:''
  })
}


mostrarCosto(){

  this.backend.obtenerCosto(this.formGroup.controls['ID_origen'].value,this.formGroup.controls['ID_destino'].value).subscribe(x =>{
    console.log(x.datos)
    this.arrCostos = x.datos;
    for(let costoss of this.arrCostos){
      console.log('El costo es:' + costoss.Costo);
      console.log('El volumen es:' + this.formGroup.controls['ID_volumen'].value)
      this.backend.obtenerVolPrecio(this.formGroup.controls['ID_volumen'].value).subscribe(x =>{
        console.log(x.datos)
        this.arrCostoVol=x.datos
        for(let costvol of this.arrCostoVol){
          console.log('El Costo del Volumen es:'+ costvol.Precio)
          this.sumaTotal= costoss.Costo +costvol.Precio;

        }
      })

    }

  })

}





guardarPedido(){
  let Pedido = new pedido(
    this.formGroup.controls['Destinatario'].value,
    
    this.formGroup.controls['Direccion'].value,
    this.ID_Costo.push().toString(),
    this.formGroup.controls['ID_volumen'].value,
    this.formGroup.controls['ID_origen'].value,
    this.formGroup.controls['ID_destino'].value,
    this.ID_Cliente.push(),
  );

this.backend.insertarPedido(Pedido).subscribe(x =>{
    console.log("Respuesta: "+ x);
    alert(x.mensaje);
    this.borrarFormulario();
  })

}




}
