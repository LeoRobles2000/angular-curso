import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Thor','Hulk','Black Widow'];
  heroeBorrado: string = '';

  borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
  }


}
