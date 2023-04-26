import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from 'src/models/pokemonModel';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private api;

  constructor(private http: HttpClient) {
    this.api = environment.pokemonAPI;
  }

  getPokemon(name: string): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.api}${name}`);
  }
}
