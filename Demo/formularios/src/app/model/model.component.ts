import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Andinotools } from 'andinotools';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent implements OnInit {
  formulario: FormGroup;
  /**
   * Clases que agrega Angular para validar
   * valid - invalid
   * pristine - dirty
   * untouched - touched
   */
  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      edad: new FormControl('', [this.edadValidator]),
      rut: new FormControl('', [this.rutValidator]),
      password: new FormControl(''),
      rpassword: new FormControl(''),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)$|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)/
        ),
      ]),
    });
  }

  ngOnInit(): void {

    const emailControl = this.formulario.controls['email']
    emailControl.valueChanges.pipe(debounceTime(500)).subscribe(
      value=>{
        console.log(value)
      }
    )

    const rutControl = this.formulario.controls['rut']
    rutControl.valueChanges.subscribe( value=>this.verifyRutFormat(value))

  }

  onSubmit() {
    console.log(this.formulario.value);
  }

  // VALIDATORS

  edadValidator(formControl: any) {
    const value = parseInt(formControl.value);

    const max = 70;
    const min = 10;

    const isValid = value >= min && value <= max;
    console.log(isValid);
    return isValid ? null : { edadvalidator: { max, min } };
  }

  verifyRutFormat(e: any) {
    if (/[^0-9\K\k]/g.test(e)) {
      this.formulario.controls['rut'].setValue(
        this.formulario.controls['rut'].value.replace(/[^0-9\K\k]/g, '')
      );
    }
  }

  rutValidator(formControl: any) {
    const value = formControl.value;
    const verifyRut = new Andinotools().rutValidator(value)

    if (verifyRut === '') {
      return null
    } else {
      return { error: verifyRut }
    }

  }
}
