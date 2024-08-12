import { Component, OnInit } from '@angular/core';
import { PuertoService } from '../../services/puerto.service';
import { Puerto } from '../../models/puerto';

@Component({
  selector: 'app-puerto',
  templateUrl: './puerto.components.html',
  styleUrls: ['./puerto.components.css']
})
export class PuertoComponent implements OnInit {
  puerto: Puerto = { id: 0, nombre: '', ubicacion: '' };
  puertos: Puerto[] = [];

  constructor(private puertoService: PuertoService) {}

  ngOnInit(): void {
    this.getPuertos();
  }

  getPuertos(): void {
    this.puertoService.getPuertos().subscribe(puertos => {
      this.puertos = puertos;
    });
  }

  addPuerto(): void {
    this.puertoService.addPuerto(this.puerto).subscribe(newPuerto => {
      this.puertos.push(newPuerto);
      console.log('Puerto añadido:', newPuerto);
      this.puerto = { id: 0, nombre: '', ubicacion: '' };
    });
  }
  deletePuerto(id: number): void {
    this.puertoService.deletePuerto(id).subscribe(() => {
      this.puertos = this.puertos.filter(puerto => puerto.id !== id);
    });
    window.location.reload();
  }
}
