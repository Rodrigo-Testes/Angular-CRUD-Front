import { Component } from '@angular/core';
import { Curso } from '../model/curso';

//importacao do um modulo responsavel pelo angulas material
import { AppMaterialModule } from '../../shared/app-material/app-material.module';


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
  cursoss: Curso[] = [
    {_id: "1", nome: "Angular", categoria:"Front-End"},
    {_id: "2", nome: "Java", categoria:"Back-End"}
  ];

  //aqui diz quais as colunas iram ser exibidas na tabela
  mostraColunas = ['_id' ,'nome','categoria']

  constructor(){
    //this.cursos = [];
  }
}
