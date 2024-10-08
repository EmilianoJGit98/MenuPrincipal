import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HeaderComponent } from './header/header.component';
import { ItemsListComponent } from './items-list/items-list.component';

export const routes: Routes = [
  { path: '', component: FormLoginComponent },
  { path: 'main', component: MainMenuComponent },
  { path: 'items-list', component: ItemsListComponent },
  { path: 'digitalizaciones', component: ItemsListComponent },
];
