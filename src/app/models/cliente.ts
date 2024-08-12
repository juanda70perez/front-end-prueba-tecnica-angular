export interface Cliente {
    id?: number;
    nombre?: string;
    email?: string;
    telefono?: string;
  }
  export class Clienteclass implements Cliente{
    constructor (
      public id?: number){}

  }