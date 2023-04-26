import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pokemon:string = 'pikachu';
  text:string = '';

  setPokemon(){
    this.pokemon = this.text;
  }

}
