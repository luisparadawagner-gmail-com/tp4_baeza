import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
  //@Output() altaUsuario = new EventEmitter<string>();

  constructor(private fb: FormBuilder,  private router: Router){}

  nombreControl = new FormControl('Alta');
  //usuario: any;

  //jugadores: any[] = [ 'Messi', 'Maradona', 'Tevez' ];


 // setNombre(){
   //   this.nombreControl.setValue('');
  //}

  altaForm = this.fb.group({
      nombre : ['', Validators.required],
      apellido : ['', Validators.required],
      usuario : [''],
      correo : ['',Validators.required],
     
  });

  submit(){
    debugger;
    this.altaForm.value;

    
    
  }


  ngOnInit(): void {
  }

}
