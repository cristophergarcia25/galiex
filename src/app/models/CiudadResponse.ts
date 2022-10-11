import { Ciudad } from "./Ciudad";


export class CiudadResponse{
    id:number;
    mensaje: string;
    datos: Array<Ciudad>;


constructor(id:number ,mensaje: string, datos: Array<Ciudad>){
    this.id= id;
    this.mensaje=mensaje;
    this.datos=datos;
}

}
