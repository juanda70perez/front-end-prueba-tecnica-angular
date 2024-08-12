import { Component, OnInit } from '@angular/core';
import { BodegaService } from '../../services/bodega.service';
import { Bodega } from '../../models/bodega';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent implements OnInit {
  bodegas: Bodega[] = [];
  newBodega: Bodega = { id: 0, nombre: '', ubicacion: '' };

  constructor(private bodegaService: BodegaService) {}

  ngOnInit(): void {
    this.bodegaService.getBodegas().subscribe(data => {
      this.bodegas = data;
    });
  }

  addBodega(): void {
    this.bodegaService.addBodega(this.newBodega).subscribe(newBodega => {
      this.bodegas.push(newBodega);
      this.newBodega = { id: 0, nombre: '', ubicacion: '' }; // Reset form
    });
  }

  deleteBodega(id: number): void {
    this.bodegaService.deleteBodega(id).subscribe(() => {
      this.bodegas = this.bodegas.filter(bodega => bodega.id !== id);
    });
    window.location.reload();
  }
}
