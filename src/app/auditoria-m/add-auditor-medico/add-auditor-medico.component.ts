import { Component, Inject } from '@angular/core'; // Decorador para definir componentes y para inyección de dependencias.

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
  selector: 'app-add-auditor-medico',
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
  templateUrl: './add-auditor-medico.component.html',
  styleUrls: ['./add-auditor-medico.component.css'], // Corregido aquí
})
export class AddAuditorMedicoComponent {
  formAdd: FormGroup;

  constructor(
    private FormBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddAuditorMedicoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formAdd = this.FormBuilder.group({
      desc_actividad: ['', [Validators.required]],
      precio_act: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\d+(\.\d{1,2})?$/), // Solo números y hasta dos decimales
        ],
      ],
      idsubrubro: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  cerrarModal(): void {
    this.dialogRef.close();
  }

  submitModal(): void {
    if (this.formAdd.invalid) {
      // alert('Por favor, complete todos los campos correctamente.');
      // return;
    }

    // Cierra el modal y pasa los datos del formulario al componente padre
    this.dialogRef.close(this.formAdd.value);
  }
}
