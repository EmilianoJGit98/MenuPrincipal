import { Component, Inject, OnInit } from '@angular/core'; // Decorador para definir componentes y para inyección de dependencias.

import {
  MatDialogRef, // Referencia al diálogo abierto o modal, permite cerrarlo y comunicarse con el componente padre.
  MAT_DIALOG_DATA, // Token para inyectar datos al abrir el diálogo.
  MatDialogModule, // Módulo de Angular Material para modales.
} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field'; // Módulo para campos de formulario de Material Design.

import { MatInputModule } from '@angular/material/input'; // Módulo para campos de entrada estilizados de Material Design.

import { MatButtonModule } from '@angular/material/button'; // Módulo para botones estilizados de Material Design.

import {
  FormBuilder, // Servicio para construir formularios de manera más sencilla.
  FormGroup, // Clase para grupos de controles de formulario.
  FormsModule, // Módulo para formularios de plantilla (no se usa en formularios reactivos).
  ReactiveFormsModule, // Módulo para usar formularios reactivos en Angular.
  Validators, // Conjunto de validadores predefinidos para formularios.
} from '@angular/forms';

import { CommonModule } from '@angular/common'; // Módulo que proporciona directivas comunes como ngIf y ngFor.

@Component({
  selector: 'app-update-auditor-medico',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-auditor-medico.component.html',
  styleUrl: './update-auditor-medico.component.css',
})
export class UpdateAuditorMedicoComponent {
  formUpdate!: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    public ModalUpdate: MatDialogRef<UpdateAuditorMedicoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formUpdate = this.FormBuilder.group({
      desc_actividad: [data.desc_actividad, [Validators.required]],
      precio_act: [
        data.precio_act,
        [
          Validators.required,
          Validators.pattern(/^\d+(\.\d{1,2})?$/), // Solo números y hasta dos decimales
        ],
      ],
      idsubrubro: [data.idsubrubro, Validators.required],
    });
  }

  OnInit(): void {}

  cerrarModalUpdate(): void {
    this.ModalUpdate.close();
  }

  submitModalUpdate(): void {
    if (this.formUpdate.invalid) {
      // alert('Por favor, complete todos los campos correctamente.');
      // return;
    }

    // Cierra el modal y pasa los datos del formulario al componente padre
    this.ModalUpdate.close(this.formUpdate.value);
  }
}
