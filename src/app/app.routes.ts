import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { DigitalizacionesComponent } from './digitalizaciones/digitalizaciones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AfiliacionesComponent } from './afiliaciones/afiliaciones.component';
import { SoporteTecnicoComponent } from './soporte-tecnico/soporte-tecnico.component';
import { PrestacionesComponent } from './prestaciones/prestaciones.component';
import { AuditoriaMComponent } from './auditoria-m/auditoria-m.component';
import { FarmaciaComponent } from './farmacia/farmacia.component';
import { TurneroComponent } from './turnero/turnero.component';
import { AddAuditorMedicoComponent } from './auditoria-m/add-auditor-medico/add-auditor-medico.component';
import { UpdateAuditorMedicoComponent } from './auditoria-m/update-auditor-medico/update-auditor-medico.component';

export const routes: Routes = [
  // { path: '**', redirectTo: 'main' }, // Manejo de rutas desconocidas
  { path: '', component: FormLoginComponent },
  {
    path: 'main',
    component: MainMenuComponent,
    children: [
      { path: 'afiliaciones', component: AfiliacionesComponent },
      { path: 'auditoriaM', component: AuditoriaMComponent,
        children: [
          { path: 'add-auditor', component: AddAuditorMedicoComponent },
          { path: 'update-auditor/:idAuditor', component: UpdateAuditorMedicoComponent }
        ],
       },
      { path: 'farmacia', component: FarmaciaComponent },
      { path: 'turnero', component: TurneroComponent },
      { path: 'prestaciones', component: PrestacionesComponent },
      { path: 'soporteT', component: SoporteTecnicoComponent },
      { path: '', redirectTo: 'afiliaciones', pathMatch: 'full' }, // Redirigir al primer hijo por defecto
    ],
  },
  { path: 'items-list', component: ItemsListComponent },
  { path: 'digitalizaciones', component: DigitalizacionesComponent },
  { path: 'portal', component: FormularioComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
