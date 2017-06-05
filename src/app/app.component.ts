// importa de typescript, imorta el modulo componente de angular core
import { Component } from '@angular/core';


// decorador, es metadata de una clase, lo que hace
// es agregar informacion a nuestra clase
@Component({
  selector: 'app-root', // este es el nombre que se va autilizar para poner dentro del html
  templateUrl: './app.component.html', // es la vista de este componente
  styleUrls: ['./app.component.css'] // archivo de estilos
})
export class AppComponent { // esta es la clase
  title: string = 'app works!'; // esta es una variable

  count: number = 0;

  imageSource: string = './../favicon.ico';

  enable: boolean = true;



  // si yo no definoel tipo de variable, pero le asigno un valor primitivo el sabe que es de ese tipo
}

