import { Component, OnInit, ViewChild } from '@angular/core'; // Importar el decorador Component y ciclos de vida OnInit y ViewChild
import { MainMenuComponent } from '../main-menu/main-menu.component'; // Importar el componente de menú principal para usarlo en este componente
import { ListadoGenericoService } from '../services/listado-generico.service'; // Importar el servicio que obtiene la lista de usuarios
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar funcionalidades comunes en Angular
import { MatTableDataSource, MatTableModule } from '@angular/material/table'; // Importar MatTable para la tabla y MatTableDataSource para manejar los datos
import { Iusuario } from '../models/listado.model'; // Importar la interfaz Iusuario que define la estructura de los datos de usuario
import { MatButtonModule } from '@angular/material/button'; // Importar el módulo de botones de Angular Material
import { MatIconModule } from '@angular/material/icon'; // Importar el módulo de íconos de Angular Material
import { MatPaginator } from '@angular/material/paginator'; // Importar el componente paginator de Angular Material para manejar la paginación
import { MatInputModule } from '@angular/material/input';

const ListadoAfiliados: Iusuario[] = []; // Crear un arreglo vacío de Iusuario, aunque no se está utilizando en esta implementación.

@Component({
  selector: 'app-afiliaciones', // Selector del componente que puede ser utilizado en plantillas HTML
  templateUrl: './afiliaciones.component.html', // Ruta del archivo HTML asociado al componente
  styleUrls: ['./afiliaciones.component.css'], // Ruta de los estilos CSS asociados al componente
  standalone: true, // Indica que el componente puede funcionar de forma independiente (Angular 14+)
  imports: [
    MainMenuComponent, // Importar el componente del menú principal
    CommonModule, // Importar el módulo común
    MatTableModule, // Importar el módulo de tabla de Angular Material
    MatButtonModule, // Importar el módulo de botones de Angular Material
    MatIconModule, // Importar el módulo de íconos de Angular Material
    MatPaginator, // Importar el módulo paginator de Angular Material para la paginación
    MatInputModule,
  ],
})

// Este componente representa una lista de afiliaciones con funcionalidad de tabla y paginación.
// Código para instalar librerías de DataTable (aunque se hace referencia y no se utiliza aquí)
// consola -> npm install jquery datatables.net datatables.net-dt
// instalar jquery -> npm install jquery
export class AfiliacionesComponent implements OnInit {
  ListadoGenerico: Iusuario[] = []; // Arreglo que almacenará la lista de usuarios obtenida del servicio
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'acciones']; // Definir las columnas que se mostrarán en la tabla
  dataSource: MatTableDataSource<Iusuario> = new MatTableDataSource(); // Crear una fuente de datos para la tabla usando MatTableDataSource
  dataServiceResponse: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Usar ViewChild para obtener una referencia del paginator definido en el HTML
  @ViewChild(MatPaginator) paginatorResponsive!: MatPaginator; // Usar ViewChild para obtener una referencia del paginator definido en el HTML

  constructor(private ListGenerico: ListadoGenericoService) {} // Inyectar el servicio ListadoGenerico en el constructor

  ngOnInit() {
    this.dataSource.paginator = this.paginatorResponsive;
    // Método que se ejecuta una vez al inicializar el componente
    this.ListGenerico.getListGenerico().subscribe((response: Iusuario[]) => {
      this.dataSource.data = response; // Asignar la respuesta del servicio a dataSource para mostrarla en la tabla
      // this.dataServiceResponse = this.dataSource.filteredData;

      console.log(this.dataSource.filteredData);
    });
  }

  ngAfterViewInit() {
    // Método que se ejecuta después de la inicialización de la vista
    this.dataSource.paginator = this.paginator; // Conectar el paginator a la tabla para manejar la paginación
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Asignar el valor del filtro
  }

  filtroResponsive(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase(); // Asignar el valor del filtro
  }

  // La línea siguiente fue comentada ya que se definió anteriormente en displayedColumns
  // displayedColumns: string[] = ['id', 'name', 'username', 'email', 'acciones'];
}
