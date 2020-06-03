import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrls: ['./alta.component.css']
})
export class AltaComponent implements OnInit {
 
  constructor(private fb: FormBuilder){}

  nombreControl = new FormControl('Alta');

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
