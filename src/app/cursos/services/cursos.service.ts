import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//importtando a interface no model/curso.ts
import { Curso } from './../model/curso';
import { delay, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  //colocando a URL da API em uma variavel(nesse caso esta mokado)
  private readonly API = 'api/cursos';

  constructor(public httpClient: HttpClient) { }

  //listando todos os cursos ja com a interface dentro da funcao e dados seus dados
  listaDeTodosCursos(){
    return this.httpClient.get<Curso[]>(this.API).pipe(
      take(1),
      delay(3000),
    );
  }
}
