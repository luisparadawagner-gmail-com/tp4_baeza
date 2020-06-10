import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { Router} from '@angular/router';
import { ModificacionComponent } from '../modificacion/modificacion.component';
import { Usuario } from '../clases/Usuario';


@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  
  constructor(private fb: FormBuilder,  private router: Router){}

  usuarioA: Usuario;
  muestraModificacion: boolean=false;
  muestraAlta: boolean=true;

  nombreControl = new FormControl('Alta');

    altaForm = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      usuario : [''],
      correo : ['',Validators.required],
     
  });

  submit(){
    debugger;
    this.altaForm.value;
    this.usuarioA = this.altaForm.value;
    this.muestraModificacion=true;
    this.muestraAlta =false;
        
  }

  ngOnInit(): void {
  }

}
