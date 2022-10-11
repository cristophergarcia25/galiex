import { cliente } from "./Cliente";


export class ClienteResponse{
    id:number;
    mensaje: string;
    datos: Array<cliente>;


constructor(id:number ,mensaje: string, datos: Array<cliente>){
this.id= id;
 this.mensaje=mensaje;
this.datos=datos;
}

}
