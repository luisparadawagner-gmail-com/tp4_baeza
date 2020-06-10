

import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { Usuario } from '../clases/Usuario';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})


export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'apellido', 'usuario', 'correo','modificar'];
  dataSource = new MatTableDataSource<Usuario>(ELEMENT_DATA);
  

  //@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    //this.dataSource.paginator = this.paginator;
  
    
  }	  
  

  constructor(private router: Router, private route: ActivatedRoute) {}
  goToListar() {		
    this.router.navigate(["/modificacion-component",ELEMENT_DATA[2]]);
  }
}

  

const ELEMENT_DATA: Usuario[] = [
  {nombre: 'Carolina', apellido: 'Baeza', usuario: 'cbaeza', correo: 'correo@prueba'},
  {nombre: 'Sergio',apellido: 'Gomez',usuario: 'sgomez',correo: 'sgomez@gmail.com'},
  {nombre: 'Tomas',apellido: 'Perez',usuario: 'tperez',correo: 'tperez@gmail.com'},
  {nombre: 'Sergio',apellido: 'Gomez',usuario: 'sgomez',correo: 'sgomez@gmail.com'},
	{nombre: 'Ana',apellido: 'Ramos',usuario: 'aramos',correo: 'aramos@gmail.com'},	
	
];


