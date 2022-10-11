import { Pedidos } from "./Pedidos";

export class PedidosResponse{
    id:number;
    mensaje: string;
    datos: Array<Pedidos>;


constructor(id:number ,mensaje: string, datos: Array<Pedidos>){
this.id= id;
 this.mensaje=mensaje;
this.datos=datos;
}

}
