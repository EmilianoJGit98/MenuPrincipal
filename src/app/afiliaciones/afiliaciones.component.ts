import { Component, OnInit } from '@angular/core';
import { MainMenuComponent } from '../main-menu/main-menu.component';

@Component({
  selector: 'app-afiliaciones',
  templateUrl: './afiliaciones.component.html',
  styleUrls: ['./afiliaciones.component.css'],
  standalone: true,
  imports: [MainMenuComponent],
})
export class AfiliacionesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
