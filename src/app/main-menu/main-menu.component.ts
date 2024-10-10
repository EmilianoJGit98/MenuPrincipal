import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
  imports: [RouterModule],
})
export class MainMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
