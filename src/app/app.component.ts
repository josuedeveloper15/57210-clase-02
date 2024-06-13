import { Component } from '@angular/core';
class User {
  constructor(public nombre: string, public apellido: string) {}
}

const user = new User('Naruto', 'Uzumaki');
const user2 = new User('Sasuke', 'Uchiha');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'clase-02-angular';

  contador = 0;

  sumar() {
    this.contador++;
    alert(this.contador);
  }

  saludar() {
    alert('Hola!');
  }

  mostrarUsuario(id: string) {
    console.log(id);
  }
}
