import { pedido } from "./Pedido";


export class PedidoResponse{
    id:number;
    mensaje: string;
    datos: Array<pedido>;


constructor(id:number ,mensaje: string, datos: Array<pedido>){
this.id= id;
 this.mensaje=mensaje;
this.datos=datos;
}

}
