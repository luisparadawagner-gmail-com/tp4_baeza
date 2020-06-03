

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})

export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['posicion', 'nombre', 'apellido', 'usuario', 'correo'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  
  posicion: number;
  nombre: string;
  apellido: string;
  usuario: string;
  correo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {posicion: 1, nombre: 'Carolina', apellido: 'Baeza', usuario: 'cbaeza', correo: 'correoprueba'}
];


