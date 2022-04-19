import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empleado } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form: FormGroup;

  constructor(private empService:EmpleadosService) { 
    this.form = new FormGroup({
      nombre: new FormControl('', [
        Validators.required
      ]),
      apellidos: new FormControl('', [
        Validators.required
      ]),
      edad: new FormControl('', [
        Validators.required
      ]),
      departamentoId: new FormControl('',[
        Validators.required
      ]),
      img: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)$|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/
        ),
      ]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    const values = this.form.value
    const empleado = new Empleado(values.nombre,values.apellidos,values.email,parseInt(values.departamentoId),values.password,values.img)

    
    this.empService.submitEmployee(empleado)

    console.log(empleado)
  }

  // VALIDATOR

  isRequired(name:string){    
    return this.form.controls[name].errors?.['required'] && this.form.controls[name].touched
  }

  isPatternError(name:string){
    return this.form.controls[name].hasError('pattern') && this.form.controls[name].touched
  }

}
