import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

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
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    // Cierra el modal y pasa los datos del formulario al componente padre
    this.dialogRef.close(this.formAdd.value);
  }
}
