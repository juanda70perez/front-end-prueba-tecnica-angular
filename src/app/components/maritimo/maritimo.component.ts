import { Component, OnInit } from '@angular/core';
import { MaritimoService } from '../../services/maritimo.service';
import { EnvioMaritimo, EnvioMaritimoclass } from '../../models/envioMaritimo';
import { Puerto, Puertoclass } from '../../models/puerto';
import { Cliente, Clienteclass } from '../../models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { PuertoService } from 'src/app/services/puerto.service';
@Component({
  selector: 'app-maritimo',
  templateUrl: './maritimo.component.html',
  styleUrls: ['./maritimo.component.css']
})
export class MaritimoComponent implements OnInit {
  envios: EnvioMaritimo[]= [];
  puertos: Puerto[] = [];
  clientes:Cliente[]=[];


  constructor(private maritimoService: MaritimoService, private clienteService:ClienteService, private puertoService:PuertoService) {}

  ngOnInit(): void {
    this.maritimoService.getEnvios().subscribe(data => {
      this.envios = data;
    });
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
    this.puertoService.getPuertos().subscribe(data => {
      this.puertos = data;
    });
  }

  addEnvio(envio: any): void {
    let envioMaritomo:EnvioMaritimo;
    envioMaritomo=new EnvioMaritimoclass(
      envio.tipoProducto,
      envio.cantidad,
      envio.fechaRegistro,
      envio.fechaEntrega,
      new Puertoclass(parseInt(envio.puertoEntrega)),
      envio.precioEnvio,
      envio.numeroFlota,
      envio.numeroGuia,
      new Clienteclass(parseInt(envio.cliente)),
    )
    this.maritimoService.addEnvio(envioMaritomo).subscribe(newEnvio => {
      this.envios.push(newEnvio);
    });
  }

  deleteEnvio(id: number): void {
    this.maritimoService.deleteEnvio(id).subscribe(() => {
      this.envios = this.envios.filter(envio => envio.id !== id);
    });
  }
}
