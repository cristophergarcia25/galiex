import { volumen } from "./Volumen";


export class VolumenResponse{
    id:number;
    mensaje: string;
    datos: Array<volumen>;


constructor(id:number ,mensaje: string, datos: Array<volumen>){
    this.id= id;
    this.mensaje=mensaje;
    this.datos=datos;
}

}