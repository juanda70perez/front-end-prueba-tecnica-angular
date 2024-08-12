export interface Bodega {
    id?: number;
    nombre?: string;
    ubicacion?: string;
  }
  export class BodegaClass implements Bodega{
    constructor (
      public id?: number){}

  }