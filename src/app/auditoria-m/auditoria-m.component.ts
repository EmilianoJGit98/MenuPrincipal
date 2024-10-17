import { Component } from '@angular/core';
import { GestionActividadesAPI } from '../services/gestion-actividades-api.service';
import { ActividadesAnualesService } from '../services/actividades-anuales.service';
import { ActividadesOktoberFestService } from '../services/actividades-oktober-fest.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddAuditorMedicoComponent } from './add-auditor-medico/add-auditor-medico.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-auditoria-m',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './auditoria-m.component.html',
  styleUrl: './auditoria-m.component.css',
})
export class AuditoriaMComponent {
  constructor(
    private gestActividades: GestionActividadesAPI,
    private actAnuales: ActividadesAnualesService,
    private actOktober: ActividadesOktoberFestService,
    public modal: MatDialog
  ) {}
  IDevento: number = 1;
  ArregloActividades: any[] = [];
  actividadesAnuales: any[] = [];
  actividadesOktober24: any[] = [];

  ngOnInit() {
    this.actividadesAnuales = this.actAnuales.obtenerActividadesAnuales();
    this.actividadesOktober24 = this.actOktober.ObtenerActividadesOktoberfest();

    let arrIDRubros: number[] = [];

    if (this.IDevento == 1) {
      arrIDRubros = this.actividadesAnuales.map((actividad) => actividad.id); // Ejemplo de IDs a enviar
    } else if (this.IDevento == 2) {
      arrIDRubros = this.actividadesOktober24.map((actividad) => actividad.id); // Ejemplo de IDs a enviar
    }

    this.obtenerActividadesMuni(arrIDRubros);

    // console.log(arrIDRubros);
  }

  obtenerActividadesMuni(actividades: number[]): void {
    this.gestActividades.obtenerActividadesPorId(actividades).subscribe(
      (data) => {
        this.ArregloActividades = data; // Asigna los datos recibidos a la variable
        console.log(this.ArregloActividades);
      },
      (error) => {
        console.error('Error al obtener actividades:', error);
      }
    );
  }

  activeId: number | null = null; // Para almacenar el ID del toast activo

  setActive(id: number) {
    this.activeId = id; // Establecer el ID del toast activo
  }

  isActive(id: number): boolean {
    return this.activeId === id; // Verifica si el toast es el activo
  }

  abrirModal(): void {
    const dialogRef = this.modal.open(AddAuditorMedicoComponent);

    dialogRef.afterClosed().subscribe((result) => {
      // Aquí manejas el resultado, que son los datos enviados desde el modal
      if (result) {
        console.log(result);
        // Aquí puedes hacer lo que necesites con los datos recibidos
      }
    });
  }
}
