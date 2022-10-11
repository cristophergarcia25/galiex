export class Pedidos{

    Destinatario:string;
    Direccion:string;
    Estado: string;
    ID_costo:string;
    ID_volumen:number;
    ID_origen:string;
    ID_destino:string;
    ID_cliente:number;
    
    

constructor(Destinatario :string, Direccion: string, Estado: string, ID_costo: string, ID_volumen:number, ID_origen:string, ID_destino:string, ID_cliente:number){

    this.Destinatario=Destinatario;
    this.Direccion=Direccion;
    this.Estado=Estado;
    this.ID_costo= ID_costo;
    this.ID_volumen= ID_volumen;
    this.ID_origen=ID_origen;
    this.ID_destino=ID_destino;
    this.ID_cliente= ID_cliente;

    }

}