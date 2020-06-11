import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../clases/Usuario';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.css']
})
export class ModificacionComponent implements OnInit {
 @Input() modificado: Usuario;
//@Input() modificado:any;
 altaForm: FormGroup;
 parametro:any;
persona: Usuario;
 //persona: any;
  

  constructor(private fb: FormBuilder,private route: ActivatedRoute){}

  ngOnInit(): void {
  this.parametro= this.route.snapshot.params;

  if (Object.keys(this.parametro).length) {
    this.persona = this.parametro;
  } else {
    this.persona = this.modificado;
  }

  this.initForm(this.persona);
}

  initForm (modificado : Usuario)
  {
    debugger;
    this.altaForm = this.fb.group({
    nombre : [modificado.nombre, Validators.required],
    apellido : [modificado.apellido, Validators.required],
    usuario : [modificado.usuario],
    correo : [modificado.correo,Validators.required],
    }); 
};
 
      
     
      //   debugger;
      //   this.initForm(this.modificado);
       
      // }

  submit(){
    debugger;
    //this.altaForm.value;
  }




}
