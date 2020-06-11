

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
 
  
  constructor(private router:Router){}

  ELEMENT_DATA: Usuario[] = [
    {nombre: 'Carolina', apellido: 'Baeza', usuario: 'cbaeza', correo: 'correo@prueba'},
    {nombre: 'Sergio',apellido: 'Gomez',usuario: 'sgomez',correo: 'sgomez@gmail.com'},
    {nombre: 'Tomas',apellido: 'Perez',usuario: 'tperez',correo: 'tperez@gmail.com'},
    {nombre: 'Sergio',apellido: 'Gomez',usuario: 'sgomez',correo: 'sgomez@gmail.com'},
    {nombre: 'Ana',apellido: 'Ramos',usuario: 'aramos',correo: 'aramos@gmail.com'},	
    
  ];

  dataSource = this.ELEMENT_DATA;

  ngOnInit() {
    
  }	  
  

  
  goToListar(user) {		
    this.router.navigate(["/modificacion-component",user]);
  }
}

