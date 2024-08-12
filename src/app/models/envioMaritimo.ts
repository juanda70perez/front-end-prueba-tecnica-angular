import { Cliente } from "./cliente";
import { Puerto } from "./puerto";

export interface EnvioMaritimo {
    id?: number;
    tipoProducto: string;
    cantidad: number;
    fechaRegistro: Date;
    fechaEntrega: Date;
    puertoEntrega: Puerto;
    precioEnvio: number;
    numeroFlota: string;
    numeroGuia: string;
    cliente: Cliente;
  }
  export class EnvioMaritimoclass implements EnvioMaritimo{
    constructor (
      public tipoProducto: string,
      public cantidad: number,
      public fechaRegistro: Date,
      public fechaEntrega: Date,
      public puertoEntrega: Puerto,
      public precioEnvio: number,
      public numeroFlota: string,
      public numeroGuia: string,
      public cliente: Cliente){}
  }
