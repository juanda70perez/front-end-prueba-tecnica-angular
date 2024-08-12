export interface Puerto {
    id?: number;
    nombre?: string;
    ubicacion?: string;
  }
  export class Puertoclass implements Puerto{
    constructor (
      public id?: number){}

  }
