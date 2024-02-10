import { Component } from '@angular/core';
import { Curso } from '../model/curso';

//importacao do um modulo responsavel pelo angulas material
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { CursosService } from '../services/cursos.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [
    AppMaterialModule,
  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  //aqui coloca os dados que vem da interface Curso.ts
  cursos$: Observable<Curso[]>;

  //aqui diz quais as colunas iram ser exibidas na tabela
  mostraColunas = ['_id' ,'nome','categoria']

  constructor(private cursosServico: CursosService){
    //a lista curso que esta em cima esta recebendo os dados dentro da funcao que esta no service
    this.cursos$ = this.cursosServico.listaDeTodosCursos();
  }
}
