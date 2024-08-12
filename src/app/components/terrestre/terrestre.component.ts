import { Component, OnInit } from '@angular/core';
import { TerrestreService } from '../../services/terrestre.service';
import { BodegaService } from '../../services/bodega.service';
import { EnvioTerrestre, EnvioTerrestreClass } from '../../models/envioTerrestre';
import { Bodega, BodegaClass } from '../../models/bodega';
import {Cliente, Clienteclass} from '../../models/cliente'
import { ClienteService } from 'src/app/services/cliente.service';



@Component({
  selector: 'app-terrestre',
  templateUrl: './terrestre.component.html',
  styleUrls: ['./terrestre.component.css']
})
export class TerrestreComponent implements OnInit {
  envios: EnvioTerrestre[] = [];
  bodegas: Bodega[] = [];
  clientes:Cliente[]=[];

  constructor(private terrestreService: TerrestreService, private bodegaService: BodegaService, private clienteService:ClienteService) {}

  ngOnInit(): void {
    this.terrestreService.getEnvios().subscribe(data => { 
      this.envios = data;
    });
    this.bodegaService.getBodegas().subscribe(data => {
      this.bodegas = data;
    });
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  
  addEnvio(envio: any): void {
    let envioTerrestres:EnvioTerrestre;
    envioTerrestres=new EnvioTerrestreClass(
      envio.tipoProducto,
      envio.cantidad,
      envio.fechaRegistro,
      envio.fechaEntrega,
      new BodegaClass (parseInt(envio.bodegaEntrega)),
      envio.precioEnvio,
      envio.placaVehiculo,
      envio.numeroGuia,
      new Clienteclass (parseInt(envio.cliente)),
    )
    this.terrestreService.addEnvio(envioTerrestres).subscribe(newEnvio => {
      this.envios.push(newEnvio);
    });
  }

  deleteEnvio(id: number): void {
    this.terrestreService.deleteEnvio(id).subscribe(() => {
      this.envios = this.envios.filter(envio => envio.id !== id);
    });
  }
}
