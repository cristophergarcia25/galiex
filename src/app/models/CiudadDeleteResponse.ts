export class CiudadDeleteResponse{
    status:number;
    mensaje: string;

    constructor(status:number ,mensaje: string){
        this.status= status;
         this.mensaje=mensaje;
        }
        
}