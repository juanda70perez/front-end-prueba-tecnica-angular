import { Component, OnDestroy, OnInit } from '@angular/core';
import { Bodega } from 'src/app/models/bodega';
import { Cliente } from 'src/app/models/cliente';
import { Puerto } from 'src/app/models/puerto';
import { LoginService } from 'src/app/services/auth/login.service';
import { User } from 'src/app/services/auth/user';
import { BodegaService } from 'src/app/services/bodega.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { PuertoService } from 'src/app/services/puerto.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userLoginOn:boolean=false;
  clientes: Cliente[] = [];
  bodegas: Bodega[] = [];
  puertos: Puerto[] = [];
  constructor(private bodegaService: BodegaService,private clienteService: ClienteService,private puertoService: PuertoService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.currentUserLoginOn.subscribe({
      next:(userLoginOn) => {
        this.userLoginOn=userLoginOn;
      }
    });
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
    this.bodegaService.getBodegas().subscribe(data => {
      this.bodegas = data;
    });
    this.puertoService.getPuertos().subscribe(puertos => {
      this.puertos = puertos;
    });
  }

  deleteCliente(id: number): void {
    this.clienteService.deleteCliente(id).subscribe(() => {
      this.clientes = this.clientes.filter(cliente => cliente.id !== id);
    });
    window.location.reload();
  }
  deleteBodega(id: number): void {
    this.bodegaService.deleteBodega(id).subscribe(() => {
      this.bodegas = this.bodegas.filter(bodega => bodega.id !== id);
    });
    
    window.location.reload();
  }
  deletePuerto(id: number): void {
    this.puertoService.deletePuerto(id).subscribe(() => {
      this.puertos = this.puertos.filter(puerto => puerto.id !== id);
    });
    window.location.reload();
  }
}
