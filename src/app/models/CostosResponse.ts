import { costos } from "./Costos";


export class CostosResponse{
    id:number;
    mensaje: string;
    datos: Array<costos>;


constructor(id:number ,mensaje: string, datos: Array<costos>){
this.id= id;
 this.mensaje=mensaje;
this.datos=datos;
}

}
