import { Bodega } from "./bodega";
import { Cliente } from "./cliente";

export interface EnvioTerrestre {
    id?: number;
    tipoProducto: string;
    cantidad: number;
    fechaRegistro: Date;
    fechaEntrega: Date;
    bodegaEntrega: Bodega;
    precioEnvio: number;
    placaVehiculo: string;
    numeroGuia: string;
    cliente: Cliente;
  }
  export class EnvioTerrestreClass implements EnvioTerrestre{
    constructor (
      public tipoProducto: string,
      public cantidad: number,
      public fechaRegistro: Date,
      public fechaEntrega: Date,
      public bodegaEntrega: Bodega,
      public precioEnvio: number,
      public numeroGuia: string,
      public placaVehiculo: string,
      public cliente: Cliente){}
  }
  