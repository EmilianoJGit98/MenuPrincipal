import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { ListadoGenericoService } from '../servicios/listado-generico.service';
import { CommonModule } from '@angular/common';
import { Iusuario } from '../models/listado.model';

@Component({
  selector: 'app-afiliaciones',
  templateUrl: './afiliaciones.component.html',
  styleUrls: ['./afiliaciones.component.css'],
  standalone: true,
  imports: [MainMenuComponent, CommonModule],
})

//codigo para instalar librerias datatable consola -> npm install jquery datatables.net datatables.net-dt
//instalar jquery ->  npm install jquery
export class AfiliacionesComponent implements OnInit {
  ListadoGenerico: any[] = [];

  usuario: Iusuario = {
    id: 0,
    username: '',
    address: {
      street: '',
    },
    email: '',
    phone: '',
  };

  constructor(private ListGenerico: ListadoGenericoService) {}

  ngOnInit() {
    this.ListGenerico.getListGenerico().subscribe((response) => {
      this.ListadoGenerico = response;
      console.log(response);
    });
  }
}
