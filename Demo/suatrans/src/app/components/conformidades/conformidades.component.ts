import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-conformidades',
  templateUrl: './conformidades.component.html',
  styleUrls: ['./conformidades.component.css']
})
export class ConformidadesComponent implements OnInit {

  form:FormGroup
  constructor() {
    this.form = new FormGroup({
      contrato: new FormControl('', [
        Validators.required
      ]),
      fechaAsignacion: new FormControl('',[
        Validators.required
      ]),
      sistema: new FormControl('',[
        Validators.required
      ]),
      norma: new FormControl('',[
        Validators.required
      ]),
      moduloNorma: new FormControl('',[
        Validators.required
      ]),
      puntoNorma: new FormControl('',[
        Validators.required
      ]),
      creador: new FormControl('',[
        Validators.required
      ]),
      tipo: new FormControl('', [
        Validators.required
      ]),
      estado: new FormControl('',[
        Validators.required
      ]),
      descripcion: new FormControl('',[
        Validators.required
      ]),
      fechaCierre: new FormControl('',[
        Validators.required
      ]),
      /*
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
      */
    });
  }

  ngOnInit(): void {

  }

}
